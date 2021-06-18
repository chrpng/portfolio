import React, { useState, useEffect } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import links from "../../constants/links"
// import quickNav from "../../constants/quickNav"
import { StaticImage } from "gatsby-plugin-image"

import DarkMode from "../DarkMode/DarkMode"

import { NavBar, NavButton, NavLogo, NavLogoImageWrapper, NavCenter, NavLinksWrapper, NavLinks, Spacer, ThemeSwitch } from "./Navbar.styles"
import { FiMenu, FiX } from "react-icons/fi"

import SpinTranslateButtonWrapper from '../CustomAnimations/SpinTranslateButton.styles'

const Navbar = ({ location }) => {
	console.log(location);
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

	useEffect(() => {
		setNav(false)
	}, [location.pathname])

  return (
    <>
      <NavBar>
        <NavCenter>
          <NavLogo>
							<AniLink cover bg="var(--background)" to="/">
								<NavLogoImageWrapper>
									<svg height="100" width="100">
										<circle className="circle" cx="50" cy="50" r="30" strokeWidth="3" fillOpacity="0" pathLength="100"/>
									</svg>
									<StaticImage
										src="../../images/avatar.jpg"
										width={50}
										height={50}
										quality={95}
										formats={["AUTO", "WEBP", "AVIF"]}
										alt="A Gatsby astronaut"
										style={{ borderRadius: `50%` }}
										placeholder="blurred"
									/>
								</NavLogoImageWrapper>
							</AniLink>
          </NavLogo>
          
          <NavButton type="button" onClick={toggleNav}>
						<SpinTranslateButtonWrapper
							condition={isOpen}
							state1={<FiX size='2em' />}
							state2={<FiMenu size='2em' />}
						/>
          </NavButton>
					<NavLinksWrapper>
						<NavLinks
							className={
								isOpen ? `${"navbar-links"} ${"show-nav"}` : `${"navbar-links"}`
							}
						>
							<ul>
								{links.map((item, index) => {
									return (
										<li key={index}>
											<AniLink
												cover 
												to={item.path} 
												activeClassName="active"
												bg="var(--background)"
											>
												{item.icon}{" "}
												{item.text}
											</AniLink>
										</li>
									)
								})}
								<li>
									<ThemeSwitch><DarkMode /></ThemeSwitch>
								</li>
							</ul>
						</NavLinks>
					</NavLinksWrapper>
        </NavCenter>
      </NavBar>
      <Spacer />
    </>
  )
}

export default Navbar