const DefaultButton = ({ text }) => {
    return (
        <div className="flex w-full justify-center py-8">
            <button className="min-w-full h-10 bg-[#76ABAE] rounded-lg text-white font-bold" type="submit">{text}</button>
        </div>
    )
}

export default DefaultButton