import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, message, Typography } from 'antd';
import { FC, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppWrapperContext } from '~/context/AppWrapperContent/AppWrapperContent';
import { publicViews } from '~/router';
import { useLoginMutation } from '~/server/auth/useLoginMutation';
import tokenService from '~/services/tokenService';
import GlowingLogo from './components/GlowingLogo';
import GlowingText from './components/GlowingText';

const { Title } = Typography;

interface LoginProps {}

const Login: FC<LoginProps> = ({}) => {
	const navigate = useNavigate();
	const { setUser } = useAppWrapperContext();
	const ref = useRef<string>('/');
	useEffect(() => {
		const str = location.href.split('next=');
		ref.current = str.length >= 2 ? str[1] : '/';
		// console.log(location.href);
		// console.log(publicViews.IssueNewByNormal.path);
		// ref.current = next;
		// console.log(next == publicViews.IssueNewByNormal.path);
		if (ref.current == publicViews.IssueNewByNormal.path) {
			message.info('عليك تسجيل الدخول، او انشاء حساب جديد لإرسال البلاغات', 3);
		}
	}, []);
	const { mutate, isLoading, isError, error, data, context, variables } = useLoginMutation({
		onError() {
			message.error('error');
		},
		onSuccess(value) {
			console.log(value);
			tokenService.setAuthToken(value.token, value.refreshToken);
			setUser(tokenService.getTokenPayload());

			navigate(ref.current);
		},
	});
	const onFinish = (values: any) => {
		mutate(values);
		console.log('Received values of form: ', values);
	};

	return (
		<div className='font-sans min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-50 to-teal-100 p-4'>
			<Card className='w-full max-w-md p-6 md:p-8 shadow-lg rounded-lg bg-white'>
				<div className='flex flex-col items-center mb-6'>
					{/* <img src={logo as any} alt='Logo' className='w-16 h-16 md:w-20 md:h-20 mb-4' /> */}
					<GlowingLogo />
					<div className='mt-10px'>
						<GlowingText text='صديق، بلّغ بثقة' />
					</div>
					{/* <Title level={2} className='text-teal-600 text-2xl md:text-3xl'>
						
					</Title> */}
					<p className='text-gray-600 text-sm md:text-base'></p>
				</div>
				<Form name='login_form' initialValues={{ remember: true }} onFinish={onFinish} className='w-full'>
					<Form.Item name='email' rules={[{ required: true, message: 'ادخل البريد الالكتروني !' }]}>
						<Input
							prefix={<UserOutlined className='text-teal-600' />}
							placeholder='Email'
							className='rounded-lg'
						/>
					</Form.Item>
					<Form.Item name='password' rules={[{ required: true, message: 'ادخل كلمة المرور !' }]}>
						<Input
							prefix={<LockOutlined className='text-teal-600' />}
							type='password'
							placeholder='Password'
							className='rounded-lg'
						/>
					</Form.Item>
					<Form.Item>
						<Button
							loading={isLoading}
							type='primary'
							htmlType='submit'
							className='font-sans w-full bg-teal-600 hover:bg-teal-700 rounded-lg'
						>
							تسجيل الدخول
						</Button>
					</Form.Item>
				</Form>
			</Card>
		</div>
	);
};

export default Login;
