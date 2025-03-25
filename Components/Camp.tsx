import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps{
    backgroundImage: string,
    title: string,
    subtitle: string,
    peopleJoined: string,
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) =>{
    return(
        <div className={`h-full w-full min-w-[400px] md:min-w-[900px] bg-cover bg-no-repeat rounded-2xl ${backgroundImage}`}>
            <div className="flex justify-left items-center my-5 mx-5  gap-4">
                <div className="rounded-full bg-green-500 p-4">
                <Image
                    src="/folded-map.svg"
                    alt="map"
                    width={28}
                    height={28}
                />
                </div>
                <div className="flex flex-col">
                <h4 className=" text-white font-semibold">{title}</h4>
                <p className="text-sm text-slate-50">{subtitle}</p>
                </div>
            </div>

            <div className="flex items-center mt-48 mx-5 gap-3">
                <span className="flex -space-x-4 overflow-hidden">
                {PEOPLE_URL.map((url) => (
                    <Image 
                    className="inline-block h-10 w-10 rounded-full"
                    src={url}
                    key={url}
                    alt="person"
                    width={52}
                    height={52}
                    />
                ))}
                </span>
                <p className="font-medium text-white">{peopleJoined}</p>
            </div>
      </div>
    )
}

const Camp = () => {
    return (
        <section className='relative my-5 md:w-[1100px] md:mx-auto'>
            <div className='flex h-[340px] w-full items-start justify-start gap-8 lg:h-[400px]'>
                <CampSite 
                    backgroundImage="bg-img-1"
                    title="Putuk Truno Camp"
                    subtitle="Prieen Pasuruan"
                    peopleJoined="50+ Joined"
                 />
                <CampSite 
                    backgroundImage="bg-img-2"
                    title="Putuk Truno Camp"
                    subtitle="Prieen Pasuruan"
                    peopleJoined="50+ Joined"
                 />
            </div>
            <div className="mx-10">
            <aside className="md:absolute right-[250px] top-[200px] w-full md:w-[500px] p-5 rounded-xl bg-green-500 text-white mt-8">
                <h2 className="font-semibold text-xl mb-1">Feeling Lost And No Knowing The Way?</h2>
                <p className="text-slate-50 text-sm">Travel opens the door to new experiences, cultures, and unforgettable memories. Whether exploring ancient landmarks, relaxing on tropical beaches, or hiking through breathtaking mountains, every journey brings excitement and discovery. Meeting new people, tasting local cuisines, and embracing different traditions enrich our perspectives.</p>
            </aside>
            </div>
        </section>
    );
};

export default Camp;