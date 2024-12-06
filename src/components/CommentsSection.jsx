import CommentForm from "./CommentForm"
import CommentMessage from "./CommentMessage"
import DefaultButton from "./DefaultButton"

const CommentsSection = () => {
    return (
        <div className="px-8 py-4">
            <div className="text-start font-sans text-4xl text-white">Comments:</div>
            <CommentForm />

            {[...Array(5)].map((_, index) => (
                <CommentMessage key={index} username={"SomeUsername"} commentText={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, corrupti excepturi pariatur dolor reprehenderit non voluptate! Assumenda, unde fugiat? Corporis nulla aliquid assumenda laboriosam dolor dicta tempora, vero voluptatibus ab."} rating={4} />
            ))}

            <DefaultButton text={"Load more"} />
        </div>
    )
}

export default CommentsSection