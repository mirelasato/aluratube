import React from "react";
import styled from "styled-components";
import config from "../config.json";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { videoService } from '../src/services/videoService';


function HomePage() {
  const service = videoService();
  const [valorDoFiltro, setValorDoFiltro] = React.useState('');
  const [playlists, setPlaylists] = React.useState("");

  React.useEffect(() => {
    console.log("useEffect");
    service.getAllVideos().then((dados) => {
      //Forma imutavel
      const novasPLaylists = { ...playlists };
      dados.data.forEach((video) => {
        if (!novasPLaylists[video.playlist]) novasPLaylists[video.playlist] = [];
        novasPLaylists[video.playlist].push(video);
      });
      setPlaylists(novasPLaylists);
    });

  }, []);

  return (
    <>
      <div style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}>
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
        <Header />
        <Timeline searchValue={valorDoFiltro} playlists={playlists}>
          Conteúdo
        </Timeline>
      </div>
    </>
  );
}

//gaiko esteve aqui

export default HomePage;

const StyledHeader = styled.div`
background-color: ${({ theme }) => theme.backgroundLevel1};
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;
const StyledBanner = styled.div`
  background-image: url(${({ src }) => src});
  height: 230px;
`;
function Header() {
  return (
    <StyledHeader>
      <StyledBanner src={config.banner} />
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>
            {config.name}
          </h2>
          <p>
            {config.job}
          </p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline({ searchValue, ...props }) {
  const playlistNames = Object.keys(props.playlists);
  //Statement (por ex for)
  //Retorno por expressão (preferido pelo react)
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            {<div>
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const seachValueNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(seachValueNormalized);
                })
                .map((video) => {
                  return (
                    <a key={video.url} href={video.url}>
                      <img src={video.thumb} />
                      <span>
                        {video.title}
                      </span>
                    </a>
                  );
                })}
            </div>}
          </section>
        );
      })}
    </StyledTimeline>
  );
}
