import React from 'react';
import './VedioPage.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import rewind_button from '../../PIC/Icon/rewind-button.png';
import play_button from '../../PIC/Icon/play-button.png';
import pause_button from '../../PIC/Icon/pause-button.png';
import forward_button from '../../PIC/Icon/forward-button.png';

function VedioPage() {
  const [onPlayOrPause, setonPlayOrPause] = useState('play');
  function togglePlayPause() {
    setonPlayOrPause(onPlayOrPause === 'play' ? 'pause' : 'play');
  }

  return (
    <div>
      <div className='vedio-page'>
        <section className='vedio-player'>
          <div className='container'>
            <div className='row-of-vedio-player'>
              <div className='vedio-player-box'>
                <h1>MOUNTAIN CLIMBER</h1>
                <iframe
                  width='75%'
                  height='75%'
                  src='https://www.youtube.com/embed/wQq3ybaLZeA'
                  title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen
                ></iframe>
                <div className='button-play-pause'>
                  <button>
                    <img src={rewind_button} alt='rewind' />
                  </button>
                  <button
                    onClick={() => togglePlayPause()}
                    style={{ display: onPlayOrPause === 'play' ? '' : 'none' }}
                  >
                    <img src={play_button} alt='Play' />
                  </button>
                  <button
                    onClick={() => togglePlayPause()}
                    style={{ display: onPlayOrPause === 'pause' ? '' : 'none' }}
                  >
                    <img src={pause_button} alt='Pause' />
                  </button>
                  <button>
                    <img src={forward_button} alt='forward' />
                  </button>
                </div>
              </div>
              <div className='go-to-workout-page'>
                <Link to='/user-workout-schedule-page'>
                  <div className='go-to-workout-page-box'>
                    <h1>Go to Workout Page</h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default VedioPage;
