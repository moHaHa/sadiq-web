export const appRoutes = {
	kitchenUser: {
		kitchensList: {
			path: '/kitchens-list',
		},
		kitchen: {
			path: '/kitchen',
		},
	},
	admin: {
		path: '/admin',
		users: {
			path: '/admin/users',
		},
		kitchens: {
			path: '/admin/kitchens',
		},
		menu: {
			path: '/admin/menu',
		},
	},
	receiptsUser: {
		path: '/receipts-user',
	},
	receiptsAdmin: {
		path: '/receipts-admin',
	},
};
export const routesByRole = {
	ReceiptAdmin: appRoutes.receiptsAdmin.path,
	ReceiptScreen: appRoutes.receiptsUser.path,
	User: appRoutes.kitchenUser.kitchensList.path,
	Admin: appRoutes.admin.path,
};
