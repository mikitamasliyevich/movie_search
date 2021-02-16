import "../styles/footer.scss"
import githubImage from "../../images/iconfinder_social_media_social_media_logo_github_2_2993772.png"

function Footer() {
	return (
		<div className="footer-container">
			<div>
				<a href="https://rs.school/" className="rollingScopes">RS School</a>
			</div>
			<div className="gitHubAccount">
				<img src={githubImage} className="gitHubImg" alt="gitHub" />
				<a href="https://github.com/mikitamasliyevich" className="gitHubLink">mikitamasliyevich</a>
			</div>
		</div>
	)
}


export default Footer
