const CommentMessage = ({ username, commentText, rating }) => {
    return (
        <div className="flex flex-col gap-4 rounded-lg bg-[#222831] p-4 mb-8">
            <div className="text-start font-sans font-medium text-xl text-white">
                {username}
            </div>
            <div className="text-start font-sans font-normal text-xl text-white max-h-72 text-pretty line-clamp-6">
                {commentText}
            </div>
            <div className="text-start font-sans font-medium text-xl text-white flex gap-1">
                Rating:
                {[...Array(5)].map((_, index) => (
                    <span key={index} className={index < rating ? 'text-yellow-400' : 'text-gray-400'}>
                        ★
                    </span>
                ))}
            </div>
        </div>
    );
}
export default CommentMessage