import Container from '@/atoms/Container'
import H1 from '@/atoms/H1'
import Layout from '@/atoms/Layout'
import illustration7 from '@/images/drawkit-grape-pack-illustration-7.svg'
import NavbarDefault from '@/organism/NavbarDefault'
import DefaultHead from '@/molecules/DefaultHead'


const Custom404 = () => {
    
    return (
        <>
            <DefaultHead title="ShortInk | Page Not Found" />
            <Container>
                <NavbarDefault withButton={false} />
            </Container>
            <Layout className='grid place-content-center mt-[-130px]'>
                <section className="flex flex-col justify-center">
                    <img 
                        src={illustration7.src} 
                        height={illustration7.height} 
                        width={illustration7.width} 
                        className='object-contain w-full animate-rotate-left-right lg:ml-10'
                    />
                    <H1 className='text-xl text-center mt-[-50px] z-[10] sm:text-2xl md:text-3xl lg:text-4xl'>Ups, <span className="text-emerald-300">your page</span> is not found!</H1>
                </section>
            </Layout>
        </>
    )
}

export default Custom404