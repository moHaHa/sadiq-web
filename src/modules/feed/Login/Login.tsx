import { Card, message, Typography } from 'antd';
import { FC, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppWrapperContext } from '~/context/AppWrapperContent/AppWrapperContent';
import { publicViews } from '~/router';
import { useLoginMutation } from '~/server/auth/useLoginMutation';
import { httpLog } from '~/server/other/httpLog';
import tokenService from '~/services/tokenService';
import SyrianArabRepublic from '../Home/components/SyrianArabRepublic';
import SyrianLogo from '../Home/components/SyrianLogo';

const { Title } = Typography;

const ALLOWED_USERS = {
	'admin@example.com': 'admin',
	'user@example.com': 'user',
};

const PASSWORD = 'P@$$w0rd';

const Login: FC = () => {
	const navigate = useNavigate();
	const { setUser } = useAppWrapperContext();
	const ref = useRef<string>('/feed');

	useEffect(() => {
		const str = location.href.split('next=');
		ref.current = str.length >= 2 ? str[1] : '/feed';
		if (ref.current == publicViews.IssueNewByNormal.path) {
			message.info('عليك تسجيل الدخول، او انشاء حساب جديد لإنشاء شكوى', 6);
		}
	}, []);

	useEffect(() => {
		httpLog('Login');
	}, []);

	const { mutate, isLoading, isError, error, data, context, variables } = useLoginMutation({
		onError() {
			message.error('error');
		},
		onSuccess(value) {
			tokenService.setAuthToken(value.token, value.refreshToken);
			setUser(tokenService.getTokenPayload());
			// navigate(ref.current);
			window.location.href = ref.current;
		},
	});

	return (
		<div>
			<div className='flex justify-between ic pt-24px px-40px'>
				<div className='w-140px md:w-240px'>
					<SyrianArabRepublic></SyrianArabRepublic>
				</div>
				<div></div>
				<div></div>
			</div>
			<div className='flex justify-center mt-40px'>
				<div className='flex flex-col lg:flex-row ic  '>
					<div className='text-white text-46px font-600  ' style={{ fontFamily: 'ZagelArabic' }}>
						محافظة دمشق
					</div>

					<div className='px-30px'>
						<div className='w-200px logo-up-down '>
							<SyrianLogo></SyrianLogo>
						</div>
					</div>
					<div className='text-white text-36px font-400 lg:pe-63px ' style={{ fontFamily: 'ZagelArabic' }}>
						<div className='text-center'>مديرية الصيانة</div>
						<div className='text-center'>قسم الشكاوى</div>
					</div>
				</div>
			</div>

			<div className='font-sans flex items-center justify-center p-4'>
				<Card loading={isLoading} className='min-w-300px '>
					<div className='text-center text-32px' style={{ fontFamily: 'ZagelArabic' }}>
						الدخول بحساب تجريبي
					</div>
					<div className='text-center text-22px' style={{ fontFamily: 'ZagelArabic' }}>
						استمر كـ
					</div>
					<div className='flex gap-12px mt-12px'>
						<div>
							<Card
								onClick={() => {
									mutate({
										email: 'admin@example.com',
										password: 'P@$$w0rd',
									});
								}}
								className='w-150px font-500  cursor-pointer h-100px text-24px fcc'
								style={{ fontFamily: 'ZagelArabic' }}
								size='small'
							>
								مدير منصة
							</Card>
						</div>
						<div>
							<Card
								onClick={() => {
									mutate({
										email: 'user@example.com',
										password: 'P@$$w0rd',
									});
								}}
								className='w-150px font-500 cursor-pointer h-100px text-24px fcc'
								style={{ fontFamily: 'ZagelArabic' }}
								size='small'
							>
								مقدم شكوى{' '}
							</Card>
						</div>
					</div>
					<div className='op-40 text-center pt-40px' style={{ fontFamily: 'ZagelArabic' }}>
						لـ إنشاء شكوى ، يجب تسجيل الدخول
					</div>
					<div className='op-40 text-center pt-10px' style={{ fontFamily: 'ZagelArabic' }}>
						مدير المصة له صلاحيات على جميع اجزاء المنصة
					</div>
				</Card>
			</div>
		</div>
	);
};

export default Login;
