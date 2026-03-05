import BadgeCard from "../../shared/BadgeCard";

function SkillSection() {

    const HardSkills = [
        {
            icon: '/svg/React.svg',
            label: 'React'
        },
        {
            icon: '/svg/Tailwindcss.svg',
            label: 'Tailwind'
        },
        {
            icon: '/svg/Vue.svg',
            label: 'Vue'
        },
        {
            icon: '/svg/Figma.svg',
            label: 'Figma'
        },
        {
            icon: '/svg/SQL.svg',
            label: 'SQL'
        },
        {
            icon: '/svg/Node.svg',
            label: 'Node'
        },
        {
            icon: '/svg/Github.svg',
            label: 'Github'
        },
        {
            icon: '/svg/Git.svg',
            label: 'Git'
        },
        {
            icon: '/svg/Wordpress.svg',
            label: 'Wordpress'
        }
    ]

    const SoftSkills = [
        {
            icon: '/svg/React.svg',
            label: 'React'
        },
        {
            icon: '/svg/React.svg',
            label: 'React'
        },
        {
            icon: '/svg/React.svg',
            label: 'React'
        },
        {
            icon: '/svg/React.svg',
            label: 'React'
        },
        {
            icon: '/svg/React.svg',
            label: 'React'
        },
        {
            icon: '/svg/React.svg',
            label: 'React'
        }
    ]

    return (
        <section className="px-6 md:px-10 lg:px-20 py-10 relative">
            <h2 className="font-montserrat text-3xl font-bold mb-6 text-(--tertiary-color)">
                Hard e Soft Skills
            </h2>
            <div className="flex flex-col md:flex-row gap-10">
                <div className="flex-1">
                    <h3 className="font-montserrat text-2xl font-semibold mb-4 text-(--tertiary-color)/90">Hard Skills</h3>
                    <BadgeCard item={HardSkills} />
                </div>
                <div className="flex-1">
                    <h3 className="font-montserrat text-2xl font-semibold mb-4 text-(--tertiary-color)/90">Soft Skills</h3>
                    <BadgeCard item={SoftSkills} styles="grid-cols-2" />
                </div>
            </div>

            <div className="absolute -left-50 -top-50 size-100 bg-(--primary-color)/10 -z-50 rounded-full blur-3xl" />
            <div className="absolute -right-50 -top-50 size-100 bg-(--primary-color)/20 -z-50 rounded-full blur-3xl" />
            <div className="absolute -right-50 top-50 size-100 bg-(--primary-color)/20 -z-50 rounded-full blur-3xl" />
            <div className="absolute -left-50 top-50 size-100 bg-(--primary-color)/10 -z-50 rounded-full blur-3xl" />
        </section>
    )
}

export default SkillSection;