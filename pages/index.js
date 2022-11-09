import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from '../src/components/Menu';
import { StyledTimeline } from '../src/components/Timeline';

function HomePage() {
    const estilosdaHomePage = {
        //  backgroundColor: "red" 
        display: "flex",
        flexDirection: "column",
        flex: 1,
    }
        ;
    console.log(config.playlist);
    return (
        <>
            <CSSReset />
            <div style={estilosdaHomePage}>
                <Menu />
                <Header />
                <Timeline playlists={config.playlist}></Timeline>
            </div>
        </>

    );
}

export default HomePage;

// function Menu() {
//     return (
//         <div>Menu</div>
//     );
// }
const StyledHeader = styled.div`
            img {
                width: 80px;
            height:80px;
            border-radius:50%
    
}
            .user-info {
                margin-top: 50px;
                display: flex;
                align-items: center;
                width:100%;
                padding:16px 32px;
                gap:16px;
}`;
function Header() {
    return (
        <StyledHeader>
            {/* <img src=""></img> */}
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`}></img>
                <div>
                    <h2>
                        {config.name}

                    </h2>
                    <p>
                        {config.job}

                    </p>
                </div>
            </section>

        </StyledHeader >
    );
}
function Timeline(props) {
    console.log(props);
    const playlistNames = Object.keys(props.playlists);
    //Statement (por ex for)
    //Retorno por expressão (preferido pelo react)
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName];
                return <section>
                    <h2>{playlistName}</h2>
                    <div>
                        {videos.map((video) => {
                            return (
                                <a href={video.url}>
                                    <img src={video.thumb}></img>
                                    <span>
                                        {video.title}
                                    </span>
                                </a>
                            );
                        })}
                    </div>
                </section>;
            })}
        </StyledTimeline>
    );
}
