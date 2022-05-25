import './Footer.scss';


function Footer() {
	const now = new Date();
	const year = now.getFullYear();

	return (
		<footer>
			Copyright &copy; {year} By Maksuda-E Elahi. All Rights Reserved.
		</footer>
	);
}

export default Footer;

