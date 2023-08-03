import { Link } from 'react-router-dom';
import { useAtom } from 'jotai';
import { darkModeAtom } from '../store/appState';
import { AppLogoDark } from '../assets/AppLogoDarkSVG';
import { AppLogoLight } from '../assets/AppLogoLightSVG';
import { NavBar } from './NavBar';

export const Header = () => {
	const [darkTheme] = useAtom(darkModeAtom);

	return (
		<div
			className='border-b border-gray-200 bg-white px-5 dark:border-neutral-600 dark:bg-neutral-800'
			aria-label='Header wrapper'
		>
			<header className='container2000 relative flex h-16 items-center justify-between'>
				<Link
					to='/'
					aria-label='Website logo'
				>
					{darkTheme ? <AppLogoLight /> : <AppLogoDark />}
				</Link>

				<NavBar />
			</header>
		</div>
	);
};
