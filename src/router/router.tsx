import { AppLayout } from '@/layouts/AppLayout';
import { HomePage } from '@/pages/home/HomePage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

export const Router = () => {
	return (
		<AppLayout>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="*" element={<Navigate to={'/'} />} />
				</Routes>
			</BrowserRouter>
		</AppLayout>
	);
};
