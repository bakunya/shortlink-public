import { memo, useCallback } from "react"
import PropTypes from 'prop-types'
import Image from 'next/image'
import useViewport from "@/hooks/useViewport"
import logoMobile from '@/logo/mobile.svg'
import logoDesktop from '@/logo/desktop.svg'
import { selfOrigin } from "@/config/constant"
import { useRouter } from "next/router"

const NavbarDefault = ({ withButton }) => {
    const width = useViewport()
    const { push } = useRouter()
    const handleRedirect = useCallback(() => push(selfOrigin), [push])

    return (
        <nav className="mb-20 mt-10 flex justify-start flex-col xs:justify-between xs:items-center xs:flex-row">
            {
                typeof window !== 'undefined' 
                    ?   width > 600
                            ? <Image 
                                layout="fixed" 
                                width={logoDesktop.width} 
                                height={logoDesktop.height} 
                                src={logoDesktop.src} 
                                alt="shortink logo" 
                                onClick={handleRedirect}
                                className="cursor-pointer"
                            />
                            : <Image 
                                layout="fixed" 
                                width={logoMobile.width} 
                                height={logoMobile.height} 
                                src={logoMobile.src} 
                                alt="shortink logo" 
                                onClick={handleRedirect}
                                className="cursor-pointer"
                            />
                    : null
            }
            {
                withButton && <a className="bgcolor-main button-main ml-auto mt-5 xs:mt-0">Already have an account?</a>
            }
        </nav>
    )
}

NavbarDefault.propTypes = {
    withButton: PropTypes.bool
}

NavbarDefault.defaultProps = {
    withButton: true
}

export default memo(NavbarDefault)