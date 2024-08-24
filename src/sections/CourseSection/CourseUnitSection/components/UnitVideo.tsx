interface Props {
    embedId: string;
}

const UnitVideo = ({ embedId }: Props) => {
    return (
        <div className="w-full">
            <div className="relative overflow-hidden pb-[56.25%] h-0">
                <iframe
                    src={`https://www.youtube.com/embed/${embedId}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    className="absolute top-0 left-0 w-full h-full"
                />
            </div>
        </div>
    );
};

export default UnitVideo;
