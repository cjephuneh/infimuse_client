import { TopTIcon } from '@/components/community/İcons';
import TweetBox from '@/components/community/TweetBox';
import Tweets from '@/components/community/Tweets';

export default function ContainerPage() {
    return(
        <>
            <header className="sticky-top flex justify-between items-center p-4 border-b border-primary-container_border_color bg-black">
                <span className="font-bold text-xl text-white">Home</span>
                <div className="flex items-center justify-center w-9 h-9 rounded-full transform transition-colors duration-2 hover:bg-gray-700 hover:bg-opacity-70 cursor-pointer">
                    <a title="Top Tweets">
                        <TopTIcon/>
                    </a>
                </div>
            </header>
            <div className="flex space-x-4 px-5 py-2 border-b border-primary-container_border_color">
                    <img className="rounded-full h-11 w-11 mt-1" src="https://randomuser.me/api/portraits/women/57.jpg"/>
                    <TweetBox/>
            </div>
            <div>
                    <Tweets/>
            </div>
        </>
    )
}
