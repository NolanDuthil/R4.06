import { Card } from "./component/Card"



export default function Page() {
    const TEAM = [
        { name: "Édouard Jérémie", img: "edouard.jpg", role: "CEO" },
        { name: "Amélie Christelle", img: "amelie.avif", role: "Directeur des recherche" },
        { name: "Gilles Damien", img: "gilles.jpg", role: "Directeur commercial" },
    ]

    return (
        <section>

            <header className="team__header">
                <h2 className="team__title">Notre équipe</h2>
            </header>
            <section className="team__content">
                <h1 className="team__heading">Présentation de notre formidable équipe</h1>
                <p className="team__description"> Découvrez les esprits créatifs qui propulsent Auto Innovation vers de nouveaux
                    sommets dans le monde de la conduite à hydrogène.</p>
            </section>
            <ul className="gallery">
                {TEAM.map((member, index) => (
                <Card key={index} name={member.name} img={member.img} role={member.role} />
                ))}
            </ul>
        </section>
    )
}

