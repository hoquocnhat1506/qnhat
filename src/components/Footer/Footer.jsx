import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";

const Footer = () => {
	return (
		<footer
			className="footer px-3 py-2 flex-row flex-align-center flex-justify-center"
			id="footer"
		>
			<div className="footer-wrapper grid mx-auto">
				<div className="app-author-info flex-col flex-justify-center flex-align-center grid-item text-center">
					<div className="app-info flex-col flex-justify-center flex-align-center text-center">
						<Link
							to="/"
							className="btn btn-link btn-light text-lg brand-logo"
						>
							Smartbooks
						</Link>
						<p className="text-sm mt-0-5">
							One stop shop for all your book needs and moods!
						</p>
					</div>

					<div className="social-links flex-row flex-align-center flex-justify-center text-center">
						<a
							href="https://www.facebook.com/anhloan2002"
							className="btn btn-link btn-light"
							target="_blank"
						>
							<span className="icon">
								<i className="fab fa-facebook text-lg"></i>
							</span>
						</a>
						<a
							href="https://github.com/Anhloan10"
							className="btn btn-link btn-light"
							target="_blank"
						>
							<span className="icon">
								<i className="fab fa-github text-lg"></i>
							</span>
						</a>
						<a
							href="mailto:anhloan100202@gmail.com"
							className="btn btn-link btn-light"
							target="_blank"
						>
							<span className="icon">
								<i className="fas fa-envelope text-lg"></i>
							</span>
						</a>
					</div>
				</div>
				<ul className="footer-item list list-stacked list-style-none grid-item footer-quick-links text-center flex-align-center flex-justify-center">
					<li className="list-head text-lg">Quick Links</li>

					<li className="list-item">
						<ul className="list list-stacked list-style-none">
							<li className="list-item">
								<Link
									to="/profile"
									className="btn-link text-sm"
								>
									Profile
								</Link>
							</li>
							<li className="list-item">
								<Link
									to="/products"
									className="btn-link text-sm"
								>
									Shop
								</Link>
							</li>
							<li className="list-item">
								<Link to="/cart" className="btn-link text-sm">
									My Cart
								</Link>
							</li>
							<li className="list-item">
								<Link
									to="/wishlist"
									className="btn-link text-sm"
								>
									My Wishlist
								</Link>
							</li>
						</ul>
					</li>
				</ul>
				<ul className="footer-item list list-stacked list-style-none grid-item footer-contact text-center flex-align-center flex-justify-center">
					<li className="list-head text-lg">Contact</li>
					<li className="list-item flex-row">
						<address className="text-sm">
							Hoa Xuan, <br />
							Cam Le, <br />
							Da Nang, Vietnam
						</address>
					</li>
					<li className="list-item text-sm flex-row mt-1">
						<span className="icon">
							<i className="fa-solid fa-phone text-sm flex-align-center"></i>
						</span>
						<span className="text-sm ml-0-25">+84 372788169</span>
					</li>
				</ul>

				<div className="mt-1 pt-2 gray-color copyright-section span-cols flex-col flex-align-center flex-justify-center text-sm text-center">
					<div className="copy-right">&copy; November 2022</div>
					<p className="text-sm author-portfolio-link">
						<span className="flex-row flex-align-center flex-justify-center text-sm">
							&lt;/&gt; by
							<a
								href="https://www.facebook.com/anhloan2002"
								className="ml-0-25"
								target="_blank"
							>
								Ánh Loan
							</a>
						</span>
					</p>
				</div>
			</div>
		</footer>
	);
};

export { Footer };
