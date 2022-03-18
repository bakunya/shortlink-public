import H1 from '@/atoms/H1'
import Layout from '@/atoms/Layout'
import illustration12 from '@/images/drawkit-grape-pack-illustration-12.svg'
import DefaultHead from '@/molecules/DefaultHead'
import NavbarDefault from '@/organism/NavbarDefault'
import Container from '@/atoms/Container'

const Custom500 = () => {
    
    return (
        <>
            <DefaultHead title="ShortInk | Page Error" />
            <Container>
                <NavbarDefault withButton={false} />
            </Container>
            <Layout className='grid place-content-center mt-[-130px]'>
                <section className="flex flex-col justify-center">
                    <img 
                        src={illustration12.src} 
                        height={illustration12.height} 
                        width={illustration12.width} 
                        className='object-contain w-[80%] animate-rotate-left-right ml-10'
                    />
                    <H1 className='text-xl text-center z-[10] sm:text-2xl md:text-3xl lg:text-4xl'>Ups, something <span className="text-red-400">were wrong!</span></H1>
                </section>
            </Layout>
        </>
    )
}

export default Custom500