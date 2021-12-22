import {useEffect} from "react";
import { auth } from "../firebase";
import Link from "next/link";
import { useRouter } from "next/router";


const Navbar = ({ user }) => {
	const router = useRouter()

	
		
	return (
		<nav>
			<div className="nav-wrapper #78909c blue-grey lighten-1">
				<Link href="/">
					<a className="brand-logo left">True TN</a>
				</Link>
				<ul id="nav-mobile" className="right ">
					{user ? (
						<>
							<li>
								<Link href="/createblog">
									<a>Create Blog</a>
								</Link>
							</li>
							<li>
								<button
									type="submit"
									className="btn red"
									onClick={() => auth.signOut()}
									
								>
									Logout
								</button>
							</li>
						</>
					) : (
						<>
							<li>
								<Link href="/signup">
									<a>Signup</a>
								</Link>
							</li>
							<li>
								<Link href="/login">
									<a>Login</a>
								</Link>
							</li>
						</>
					)}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
