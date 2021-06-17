import styled from "styled-components"

export const NavBar = styled.nav`
  padding: 0 1.875rem;
  position: fixed;
  width: 100%;
  z-index: 5;
  background-color: var(--background);
	height: var(--navbarSpacer);

	transition: background var(--globalTransitionTiming);
`

export const NavButton = styled.button`
  position: relative;
  color: var(--primaryText);
  padding: 12px 0 17px 0;
  order: 1;
  border: none;
  background-color: transparent;
  font-size: var(--menuItem);
  font-weight: 900;
  letter-spacing: -1px;
  z-index: 10;
	cursor: pointer;

	overflow: hidden;

  &::after {
    content: "";
    display: block;
    position: absolute;
    height: 3px;
    left: 0;
    right: 0;
    bottom: 10px;
    background-color: var(--primary);
  }

  @media (min-width: 768px) {
    display: none !important;
  }
`

export const NavLogo = styled.div`
  font-size: 0.875rem;
  font-weight: 900;
  width: 60%;
  flex-shrink: 0;
  letter-spacing: -0.5px;
  padding: 14px 0 7px;
  z-index: 2;

  @media (min-width: 1200px) {
    font-size: 1rem;
    padding: 12px 0;
  }

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s;

		display: inline-block;
		
		.gatsby-image-wrapper {
			vertical-align: middle; // need this to center image in anchor tag
		}

    @media (hover: hover) {
      &:hover {
        color: var(--primary);
      }
    }
  }
`

export const NavLogoImageWrapper = styled.div`
	border-radius: 50%;
	padding: 3px;
	// border: 2px solid var(--primary);
	position: relative;

	svg {
		stroke: var(--primary);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}

	.circle {
		stroke-dasharray: 100;
		stroke-dashoffset: 0;
	}

	&:hover .circle {
		animation: 0.6s ease-in-out forwards stroke;
	}

	@keyframes stroke {
		from {
			stroke-dashoffset: 100;
		}
		to {
			stroke-dashoffset: 0;
		}
	}
`

export const ThemeSwitch = styled.div`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  z-index: 2;
	overflow: hidden;
`

export const NavCenter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;

	align-items: flex-end;
`

export const NavSocials = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 0 1.875rem;
  order: 2;
  z-index: 2;

  li {
    text-align: center;
    font-size: 1.5rem;
    margin-right: 1rem;
    list-style: none;

    a {
      color: #fff;
      transition: var(--transition);

      &:hover {
        color: var(--primary);
      }
    }

    &:nth-child(2) {
      margin-right: 0;
    }
  }
`

export const NavLinksWrapper = styled.div`
	position: fixed;
  top: 0;
  right: 0;
	filter: drop-shadow(-2px -2px 3px var(--primary));

	@media (min-width: 768px) {
		position: relative;
		filter: none;
		top: auto;
		right: auto;
	}
`

export const NavLinks = styled.div`
	background-color: var(--background);
  display: flex;
	justify-content: flex-end;
	text-align: right;
  list-style: none;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  padding: 0 1.875rem;
  margin: 0;
  visibility: hidden;
  opacity: 0;
  width: 100%;
  width: 180px;
  max-width: 500px;
  transform: translateX(100%);
	box-shadow: -5px 0px 5px var(--primary);
	clip-path: ellipse(180px 180px at 100% 50%);
  transition: opacity var(--globalTransitionTiming), transform var(--globalTransitionTiming),
    visibility var(--transition) ease-in, background-color var(--globalTransitionTiming);

  @media (min-width: 768px) {
    position: relative;
    top: auto;
    left: auto;
    transform: translate(0);
    width: auto;
    height: auto;
    visibility: visible;
    opacity: 1;
    padding: 0;
		box-shadow: none;
		clip-path: none;
  }

  &.show-nav {
    visibility: visible;
    opacity: 1;
    transform: translateX(0);
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    margin: 0;
		
    @media (min-width: 768px) {
			flex-direction: row;
			align-items: flex-end;
    }
  }

  li {
    text-transform: capitalize;
    font-size: var(--menuItem);
    font-weight: 900;
    letter-spacing: -0.5px;
    position: relative;
    padding-bottom: 10px;
    margin-bottom: 10px;

    @media (min-width: 768px) {
      padding-top: 12px;
      padding-bottom: 16px;
      margin-right: 15px;
      margin-bottom: 0;

      &::after {
        bottom: 17px;
      }
    }

    @media (min-width: 1200px) {
      padding-top: 15px;
      padding-bottom: 20px;
      margin-right: 25px;

      &::after {
        bottom: 17px;
      }
    }
  }

  a, div {
    color: var(--primaryText);
    text-decoration: none;
    padding: 0;
    transition: var(--transition) color;

    &:focus,
		&.active {
      color: var(--primary);
    }
  }

  @media (hover: hover) {
    a:hover,
		div:hover {
      color: var(--primary);
    }
  }
`

export const Spacer = styled.div`
  height: var(--navbarSpacer);
`