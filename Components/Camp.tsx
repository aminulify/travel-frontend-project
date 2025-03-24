interface CampProps{
    backgroundImage: string,
    title: string,
    subtitle: string,
    peopleJoined: string,
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) =>{
    return(
        <div className={`h-full w-full min-w-[400px] md:min-w-[900px] bg-cover bg-no-repeat rounded-2xl ${backgroundImage}`}>
            {/* Camp site 1 */}
        </div>
    )
}

const Camp = () => {
    return (
        <section className='my-10 mx-10 md:w-[1100px] md:mx-auto'>
            <div className='flex h-[340px] w-full items-start justify-start gap-8 lg:h-[400px]'>
                <CampSite 
                    backgroundImage="bg-bg-img-1"
                    title="Putuk Truno Camp"
                    subtitle="Prieen Pasuruan"
                    peopleJoined="50+ Joined"
                 />
                <CampSite 
                    backgroundImage="bg-bg-img-2"
                    title="Putuk Truno Camp"
                    subtitle="Prieen Pasuruan"
                    peopleJoined="50+ Joined"
                 />
            </div>
        </section>
    );
};

export default Camp;