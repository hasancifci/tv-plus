import React from "react";
import PlayerPopup from "./PlayerPopup";
import { useState } from "react";

export default function PromotionPlayer() {
  const [buttonPopup, setButtonPopuop] = useState(false);
  return (
    <div className="player-banner-mrg">
      <img src="img/playerimg.jpeg" width="100%" height="auto" />

      <div>
        <div className="position-absolute bg-container w-100 my-auto centered-middle">
          <div className="row">
            <div className="player-btn-pd">
              <ul className="navbar-nav-ul">
                <li className="navbar-nav-ul-li">
                  <a
                    className="a btn-warning btn-subscribe btn-font"
                    href="https://web.tvplus.com.tr/yeni-kayit?access="
                  >
                    Tanıtımı İzle
                  </a>
                </li>
              </ul>
            </div>
            <div className="btn-play-mrg">
              <button
                onClick={() => setButtonPopuop(true)}
                aria-label="Fragman image"
                data-toggle="modal"
                data-target="#fragmanModal"
                className="btn btn-link btnModalLoad"
              >
                <img
                  data-src="https://tvplusweb.tcellcdn.net/images/play.png"
                  width="100"
                  className=" ls-is-cached lazyloaded"
                  src="https://tvplusweb.tcellcdn.net/images/play.png"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <PlayerPopup trigger={buttonPopup} setTrigger={setButtonPopuop}>
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/595158889?h=0d914e096b"
          width="640"
          height="360"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </PlayerPopup>
    </div>
  );
}
