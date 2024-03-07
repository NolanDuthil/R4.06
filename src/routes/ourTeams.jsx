import { useLoaderData} from "react-router-dom";
import Teams from '../ui/Team';
import { fetchOurTeams, fetchTestimonialData } from "../lib/loaders";
import Testimonial from "../ui/Testimonial";

export async function loader ({params}) {
    let teamData = await fetchOurTeams(params.teamName);
    let testiData = await fetchTestimonialData(params.teamName);
    return {team:teamData, testimonial:testiData};
}

export default function OurTeams() {

    const data = useLoaderData();

    return (
        <>
            <Teams {...data.team}/>
            <Testimonial data={data.testimonial}/>
        </>
    )
}