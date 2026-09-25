import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router';
import MarketingPage from './pages/MarketingPage';
import LandingPage from './pages/LandingPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MarketingPage />,
	},
	{
		path: '/app',
		element: <LandingPage />,
	},
	{
		path: '/marketplace',
		element: <LandingPage />,
	},
	{
		path: '*',
		element: <NotFoundPage />,
	},
]);

function App() {
	return (
		<>
			<Toaster
				toastOptions={{
					ariaProps: {
						role: 'status',
						'aria-live': 'polite',
					},
				}}
			/>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
