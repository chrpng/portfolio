import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import links from "../../constants/links"
// import quickNav from "../../constants/quickNav"
import { StaticImage } from "gatsby-plugin-image"

import DarkMode from "../DarkMode/DarkMode"

import { NavBar, NavButton, NavLogo, NavLogoImageWrapper, NavCenter, NavLinksWrapper, NavLinks, Spacer, ThemeSwitch } from "./Navbar.styles"

const Navbar = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

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
            Menu.
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
											<AniLink cover bg="var(--background)" to={item.path} activeClassName="active">
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