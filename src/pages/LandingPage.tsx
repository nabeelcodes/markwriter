import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { appDataAtom, darkModeAtom } from '../store/appState';
import { NewFileIconSVG } from '../assets/NewFileIconSVG';
import { PlusIconSVG } from '../assets/PlusIconSVG';
import { PostList } from '../components/PostList';
import { cn } from '../utilities/classNameHelper';

export const LandingPage = () => {
	const navigator = useNavigate();
	const [darkTheme] = useAtom(darkModeAtom);
	const [appData, setAppData] = useAtom(appDataAtom);

	const createNewMarkdownFile = () => {
		const slug = (Math.random().toString(16) + '0000000').slice(2, 10);
		const newPost = {
			id: slug,
			title: 'Demo Title',
			content: ' ',
			date:
				String(new Date()).substring(4, 10) +
				',' +
				String(new Date()).substring(10, 15)
		};
		const newPostArray = [...appData, newPost];
		setAppData(newPostArray);
		navigator(`/${newPost.id}`);
	};

	return (
		<div className='mx-auto max-w-6xl'>
			<section className='items-center justify-between pt-10 md:flex'>
				<div>
					<h1 className='text-3xl font-bold'>All Files</h1>
					<p className='mt-2 text-lg opacity-70'>
						Create and manage markdown files.
					</p>
				</div>

				<button
					className={cn(
						'mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-neutral-800 py-3 tracking-wide text-gray-300 hover:opacity-90 md:mt-0 md:w-auto md:px-4 md:py-2',
						{
							'bg-gray-300 text-neutral-950': darkTheme
						}
					)}
					onClick={() => createNewMarkdownFile()}
				>
					<span>
						<PlusIconSVG />
					</span>
					<span>New Markdown</span>
				</button>
			</section>

			{!appData?.length && (
				<section
					className={cn(
						'mt-6 flex h-[350px] flex-col items-center justify-center rounded-lg border border-gray-200',
						{
							'border-neutral-600': darkTheme
						}
					)}
				>
					<NewFileIconSVG />
					<h2 className='mt-6 text-xl font-bold'>No markdown file exists !</h2>
					<p className='mt-2 max-w-xs text-center opacity-70'>
						You don't have any markdowns yet. Start creating content.
					</p>
				</section>
			)}

			{appData?.length > 0 && <PostList />}
		</div>
	);
};
