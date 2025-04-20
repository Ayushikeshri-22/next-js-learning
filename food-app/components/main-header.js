import Link from "next/link";
import logoImg from "@/assets/logo.png";

export default function MainHeader(){
	return(
		<header>
			<Link href="/">
			<img src={logoImg.src} alt="Delicious Food" />
			Next Level Food
			</Link>
			<nav>
				<ul>
					<li>
						<Link href="/meals"> List of Meals</Link>
					</li>
					<li>
						<Link href="/community"> Community</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}