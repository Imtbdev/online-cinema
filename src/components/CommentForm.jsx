import { useState } from 'react';
import DefaultButton from './DefaultButton';

const CommentForm = () => {
    const [rating, setRating] = useState(0);

    const handleRatingClick = (value) => {
        setRating(value);
    };

    return (
        <form className='py-8' action="postComment">
            <div className="bg-[#222831] rounded-lg p-4">
                <div className="flex flex-col gap-8">
                    <input
                        className="w-1/3 h-8 rounded-md px-4 text-start"
                        type="text"
                        name="username"
                        placeholder="Username"
                    />
                    <textarea
                        className="w-2/3 h-32 rounded-md px-4 pt-2 resize-none"
                        name="comment_text"
                        placeholder="Comment text"
                    />
                    <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((value) => (
                            <span
                                key={value}
                                className={`text-2xl cursor-pointer ${value <= rating ? 'text-yellow-400' : 'text-gray-400'}`}
                                onClick={() => handleRatingClick(value)}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                    <DefaultButton text={'Post'} />
                </div>
            </div>
        </form>
    );
}

export default CommentForm;
