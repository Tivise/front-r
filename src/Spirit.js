
import './scss/rivandy.scss';
import React, { useEffect, useState } from 'react';
import VideoPlayer from './VideoPlayer';
import {useSelector } from 'react-redux';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const Character = (props) => {

  const [videoHeight, setVideoHeight] = useState(0);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);


  const updateHeight = () => {
    const video = document.getElementById('charVideo');
    if (video) {
      setVideoHeight(video.clientHeight);
      setPageWidth(window.innerWidth);
    }
  };

  useEffect(() => {

    // Mettre en place un écouteur pour la modification de la hauteur de la vidéo
    window.addEventListener('resize', updateHeight);

    const video = document.getElementById('charVideo');
    if (video) {
      video.addEventListener('loadedmetadata', updateHeight);
      // Appeler updateHeight immédiatement pour obtenir la hauteur initiale
      updateHeight();
    }
    
    // Nettoyer les écouteurs lors du démontage du composant
    return () => {
      window.removeEventListener('resize', updateHeight);
      if (video) {
        video.removeEventListener('loadedmetadata', updateHeight);
      }
    };
  }, []);



  const characters = [{
    'name': 'Ghoo',
    'description': '',
    'spells': [
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
    ],
    'videoPath': 'ghoo.mp4',
    'avatarPath': 'ghoo-web.png'
  },
  {
    'name': 'Bok',
    'description': '',
    'spells': [
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
    ],
    'videoPath': 'bok.mp4',
    'avatarPath': 'bok-web.png'
  },
  {
    'name': 'Flochon',
    'description': '',
    'spells': [
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
    ],
    'videoPath': 'flochon.mp4',
    'avatarPath': 'flochon-web.png'
  },
  {
    'name': 'Diaby',
    'svgs': ([
      <svg width="64px" height="64px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ffffff" d="M482.403 42.826c-10.537-8.76-24.84-4.167-43.264 11.643-76.1 65.307-202.78 179.14-282.432 269.103l21.07 21.07c82.21-87.285 203.37-205.524 304.625-301.817zm-338.477 293.42l-17.17 17.028 22.302 22.303c5.313-5.817 10.787-11.75 16.41-17.79zm-56.796.03l-12.728 12.728 79.196 79.196 12.728-12.728zm2.942 54.185l-60.475 60.475c.372 11.49 10.708 22.336 22.628 22.627l60.474-60.474-8.137-8.136c2.657 4.264 2.84 8.705.457 11.097-3.124 3.123-9.554 1.758-14.363-3.05 4.808 4.808 6.174 11.24 3.05 14.363-3.125 3.124-9.555 1.76-14.364-3.05 4.81 4.81 6.174 11.24 3.05 14.363-3.124 3.125-9.555 1.76-14.363-3.05 4.808 4.81 6.173 11.24 3.05 14.364-3.125 3.124-9.556 1.76-14.364-3.05 4.808 4.81 6.174 11.24 3.05 14.364-3.125 3.124-9.555 1.76-14.364-3.05-4.808-4.808-6.173-11.24-3.05-14.363 3.125-3.123 9.556-1.758 14.364 3.05-4.808-4.808-6.173-11.238-3.05-14.362 3.125-3.125 9.555-1.76 14.364 3.05-4.81-4.81-6.174-11.24-3.05-14.364 3.125-3.124 9.555-1.76 14.363 3.05-4.808-4.81-6.173-11.24-3.05-14.364 3.125-3.124 9.556-1.76 14.364 3.05-4.808-4.81-6.173-11.24-3.05-14.364 2.39-2.383 6.828-2.202 11.09.45z"></path></g></svg>,
      <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 8H5M7 5.85714V5.5C7 4.11929 8.11929 3 9.5 3C10.8807 3 12 4.11929 12 5.5C12 6.88071 10.8807 8 9.5 8H8" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M4 14H5M15 17V17.5C15 19.433 16.567 21 18.5 21C20.433 21 22 19.433 22 17.5C22 15.567 20.433 14 18.5 14H9" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M2 11H8M15 8V7.5C15 5.567 16.567 4 18.5 4C20.433 4 22 5.567 22 7.5C22 9.433 20.433 11 18.5 11H12.25" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>,
    ]),
    'description': '',
    'spells': [
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
    ],
    'videoPath': 'diaby.mp4',
    'avatarPath': 'diaby-web.png'
  },
  {
    'name': 'Golem',
    'description': '',
    'svgs': ([
      <svg width="64px" height="64px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ffffff" d="M291.28 113.14c-21.105-.197-46.504 4.78-76.186 15.538l-61.31 97.62a9 9 0 0 1-7.57 4.214l-105.65.613.278 118.38 94.486.743a9 9 0 0 1 8.53 6.354c7.957 25.855 26.634 40.548 49.097 49.65 18.63 7.55 39.57 10.712 57.074 11.95-.924-9.667-.874-20.846 1.69-31.51 1.845-7.666 5.07-15.214 10.843-21.23 4.665-4.864 11.064-8.425 18.566-9.9-2.417-8.75-1.9-17.564.358-25.414 3.358-11.673 9.468-22.114 14.11-31.853a9 9 0 0 1 .002-.025c.904-8.89.39-20.137 2.015-30.924.813-5.394 2.175-10.806 5.143-15.803 1.907-3.21 4.615-6.177 7.955-8.473l-11.76-29.533c-7.754 29.296-23.77 49.333-40.265 62.213-11.166 8.717-22.448 14.333-31.495 17.992-9.046 3.66-16.89 5.758-17.437 5.955l-6.104-16.933c3.808-1.373 8.865-2.503 16.79-5.71 7.927-3.205 17.69-8.092 27.167-15.49 18.955-14.8 37.084-39.063 38.16-83.08a9 9 0 0 1 17.36-3.11l26.15 65.67c13.382 6.284 22.786 6.51 31.265 3.968 7.728-2.317 15.188-7.56 23.012-13.512-3.2-26.703-10.97-53.765-21.06-81.12-12.893-20.23-30.257-31.92-54.5-35.87-5.236-.853-10.81-1.314-16.718-1.37zm128.425 34.286l-37.166 5.428c8.478 24.046 15.285 48.305 18.58 72.832 25.347 4.217 36.318-.862 54.722-5.698 5.58-20.544 7.754-38.29 3.863-49.715-2.1-6.165-5.503-10.796-11.75-14.734-6.097-3.844-15.258-6.83-28.25-8.114zm33.604 91.8c-15.195 4.203-30.293 8.315-55.456 4.157-9.19 7.16-19.212 14.996-32.14 18.87-12.515 3.753-27.416 3.04-44.187-4.792-1.482.74-2.348 1.687-3.293 3.276-1.194 2.01-2.206 5.216-2.82 9.29-.93 6.17-1.052 14.123-1.467 22.267 42.27 11.538 84.406 18.628 126.424 19.78 10.864-8.28 18.62-17.718 21.59-28.792 3.073-11.467 1.617-25.51-8.65-44.055zm-143.34 70.797c-4.47 9.197-9.032 17.62-11.183 25.1-2.734 9.505-2.687 16.425 5.14 25.7 30.633 19.38 65.708 25.593 102.438 30.464 12.98-8.606 24.286-17.244 29.422-26.133 5.3-9.17 6.31-18.654-3.71-35.334-40.81-1.786-81.518-8.768-122.106-19.797zm-19.943 62.38a9 9 0 0 1-2.386.44c-5.964.33-9.28 2.154-12.087 5.08-2.806 2.924-4.992 7.41-6.332 12.98-2.308 9.597-1.81 21.784-.493 31.19 29.334 14.184 59.095 25.29 93.064 26.41 19.342-4.057 26.193-10.234 30.187-17.71 3.1-5.802 4.263-13.514 5.814-22.45-35.73-4.915-72.027-11.895-104.85-33.11a9 9 0 0 1-1.852-1.592c-.364-.41-.716-.823-1.06-1.238z"></path></g></svg>,
      <svg width="64px" height="64px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ffffff" d="M228.813 23L68.75 72.28 39.5 182.095l47.53-21.22 10.44-4.655 2.5 11.155 8.75 39.125 6.405 28.53-21.75-19.53-15.72-14.125-28.218 32.344 140.657 136 9.656-40.69 7.53-31.874 10.407 31.063 54.72 163.592L432.343 465.5l45.75-202.938-84.563-148.718L228.814 23zm-57.688 49.875l-27.813 39.906-3.25 73.44-27.187-88.94 58.25-24.405zm17.844 93.406l113.124 155.25L407 355.407l-107.375-.844-110.656-128v-60.28zM79.312 330.25l140.125 153.125-5.563-65.875-134.563-87.25z"></path></g></svg>,
    ]),
    'spells': [
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
    ],
    'videoPath': 'golem.mp4',
    'avatarPath': 'golem-web.png'
  },
  {
    'name': 'Woom',
    'description': '',
    'svgs': ([
      <svg width="64px" height="64px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ffffff" d="M420.402 19.873c37.886 49.484 19.76 88.205-39.797 90.787 15.374-23.54 18.565-50.758-1.503-72.215 15.56 37.318-14.397 62.848-50.137 67.096-4.39-.934-8.887-1.99-13.508-3.19-60.132-15.624-114.527 22.936-137.37 78.923-.43-34.33 9.72-68.377 29.83-102.152-50.37 35.038-75.926 89.323-72.616 166.003l-59.41-65.365L89.55 374.43 254.15 494.025 392.703 389.54l52.584-196.853-93.224 72.415c-23.56-25.652-13.02-55.2 33.736-50.293-38.077-22.19-64.97-2.473-75.952 24.356-5.608-27.825 18.206-63.122 50.218-58.686 76.728 10.638 151.882-107.834 60.336-160.607zM119.838 272.05l94.777 73.214-103.095-21.22 29.263-3.05-20.945-48.943zm255.48 12.237l-10.623 25.262 27.8-.28-12.095 23.437-96.25 14.438 91.168-62.858zM204.305 360.13l42.256 62.552 11.247-44.094 17.84 32.598 56.574-48.54-7.23 24.368 51.71-21.274-54.485 61.82 9.654-29.966-76.21 71.62-47.574-55.136 3.176 27.483-74.627-77.593 61.166 29.998 6.505-33.834z"></path></g></svg>,
      <svg width="64px" height="64px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ffffff" d="M298.844 21.47c-19.177.074-37.7 9.793-43.156 29.06-21.613-18.783-57.038-5.957-57.97 13.907-.397.11-.79.234-1.187.344-12.147-4.116-20.077-.304-24.186 7.44-18.52-14.45-44.42-1.614-51.188 19.218-14.786-17.19-42.58 4.042-30.406 25.124.188.327.397.63.594.938-4.788 3.64-9.477 7.395-14.063 11.28-7.26-3.534-15.395-5.344-23.56-5.155-13.145.303-26.367 5.78-36.19 17.625v118.063c6.726 4.154 16.51 6.48 24.94 5.375-7.202 19.076-12.8 38.67-16.75 58.437-.277.918-.546 1.85-.782 2.813-.782 3.182-1.24 6.21-1.407 9.093-9.176 55.403-5.31 111.628 13.095 161.126H56.72c-15.91-39.335-21.726-84.3-18.095-129.875 20.554 13.602 55.617 7.05 63.563-25.31 7.245-29.515-15.273-47.982-38.126-47.876-4.062.02-8.143.638-12.062 1.875 5.06-17.025 11.418-33.773 19.063-49.94 5.86-12.39 12.446-24.437 19.75-36.03 13.37 8.93 38.33 6.824 41.25-21 1.343 4.814 9.112 7.514 15.656 7.438-10.532 23.45-18.023 48.2-22.564 73.343-8.506 47.1-6.837 95.784 4.625 140.564-22.214 3.28-24.636 38.295 1.22 38.844 4.18.087 7.748-.735 10.72-2.188 7.164 17.84 16.073 34.685 26.686 50.156h23.156c-45.083-57.982-62.535-143.55-48-224.03.185-1.024.4-2.042.594-3.063 12.583 16.662 30.995 16.28 44.313 7.156.098 7.433.444 14.858 1.06 22.25 6.366 76.193 39.422 149.527 91.626 197.686h29.156c-57.272-43.11-95.5-119.53-102.156-199.22-5.615-67.22 10.893-136.265 56.125-190.155-22.662 48.81-28.814 101.335-22.405 152.032-10.69 7.01-16.59 20.936-7.063 35.813 4.65 7.262 10.705 10.994 16.938 12.125 2.012 7.007 4.255 13.938 6.72 20.78 25.606 71.122 74.834 133.122 135.936 168.626h43.28c-69.03-26.022-128.378-90.037-158.405-166.47 12.857.64 25.67-14.788 16.658-29.686-3.872-6.39-9.452-9.026-14.97-9 3.396-7.17 3.52-15.913-2-24.53-4.954-7.738-11.826-11.5-18.874-12.25-5.378-44.973-.098-91.102 18.812-134.345l.906 1.75C273.37 181.75 290.925 240.357 322.625 289c10 15.346 21.402 29.735 33.906 42.938-1.243-.215-2.44-.324-3.592-.313-19.654.194-25.004 31.01-1.75 36.72 15.508 3.807 23.524-8.896 21.687-20.408 34.925 31.702 76.562 54.554 119.906 64.094v-19.217c-59.818-14.523-117.576-57.376-154.5-114.032-24.12-37.01-39.39-79.608-41.092-124 4.408-66.014 98.113-44.375 115.656-5.155-6.523-34.758-23.54-58.183-46.094-73.188 15.407-13.958-4.283-37.503-20.813-26.156-8.08-19.323-27.917-28.886-47.093-28.81zm-138.625 2c-2.13.103-4.395.752-6.72 2.03-16.766 9.213-4.997 35.847 12.75 26.094 15.18-8.345 7.774-27.85-5.125-28.125-.3-.008-.602-.016-.906 0zm264.155 22.874c-19.126-.404-22.245 28.57-2 29 20.526.43 21.4-28.59 2-29zM53.5 75.687C43.338 76.05 33.672 88.067 40.562 100c10.167 17.61 36.35 2.13 25.594-16.5-3.315-5.743-8.037-7.977-12.656-7.813zm69.906 42.282c.402.812.812 1.623 1.28 2.436 2.326 4.027 5.03 7.26 7.97 9.813-10.67 9.647-20.636 19.996-29.875 30.936-1.62-8.085-5.26-15.083-10.25-20.78 6.11-5.04 12.437-9.807 18.907-14.376 4.71-1.154 9.05-4.033 11.97-8.03zM181 123.062c2.093 2.72 4.457 5.205 7.063 7.374-4.182 5.037-8.18 10.204-11.97 15.5-2.8-4.34-6.46-8.03-10.593-10.812 6.088-2.494 11.522-6.697 15.5-12.063zm240 51.593c-25.802.693-29.64 40.193-1.594 40.78 28.89.61 30.117-40.2 2.813-40.78-.422-.01-.81-.01-1.22 0zm-244.188 4.625c3.198 9.806 12.542 14.786 22.125 13.69-2.288 8.29-4.19 16.68-5.718 25.124-6.353-6.258-13.926-9.102-21.5-9.25-3.403-.067-6.787.43-10.064 1.375 4.41-10.618 9.46-20.953 15.156-30.94zm280.47 42.22c-18.49-.39-21.542 27.59-1.97 28 19.844.417 20.725-27.608 1.97-28z"></path></g></svg>,
    ]),
    'spells': [
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
    ],
    'videoPath': 'woom.mp4',
    'avatarPath': 'woom-web.png'
  },
  {
    'name': 'Woop',
    'description': '',
    'svgs': ([
      <svg width="64px" height="64px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ffffff" d="M53.588 9.594l-45.426.59v34.808l61.945 65.485L152.7 82.16l18.878 33.037 23.248 3.875-20.558 47.28-4.46 6.214 18.03 21.952-44.455 77.384 29.174 31.877c4.798-4.18 9.5-8.29 14.074-12.305l-20.235-22.112 34.125-59.406 32.732 39.848c4.746-4.332 9.35-8.565 13.775-12.674l-53.664-65.33 34.428-47.952 70.312-4.5 11.69 55.26c4.892-5.432 9.38-10.62 13.41-15.546.65-.795 1.274-1.575 1.903-2.357l-10.9-51.53-.068.013-.97-7.688-123.89-1.77-11.798-59.585-89.673 34.808L53.59 9.598l-.002-.004zm433.5 21.717c-20.47 15.934-40.295 27.685-60.545 35.95 3.96 47.51-25.01 99.124-70.658 150.81-46.21 52.324-110.372 104.935-179.426 152.067L165.923 354.7c68.15-46.514 131.32-98.462 175.953-149 42.22-47.81 67.048-94.156 66.297-131.932-9.832 2.976-19.833 5.214-30.12 6.773-.49 27.362-11.265 54.746-40.388 90.353-32.157 39.316-86.64 90.12-176.682 167.738l-7.617 6.565-34.094-45.963-19.234 16.348c19.28 15.33 29.75 29.138 46.84 47.766l6.452 7.03-7.164 6.304c-24.68 21.712-50.044 41.688-76.758 60.162-5.077-3.61-11.26-5.746-17.908-5.746-17.062 0-31.094 14.032-31.094 31.093 0 17.06 14.032 31.093 31.094 31.093s31.094-14.032 31.094-31.094c0-2.58-.326-5.09-.93-7.493 26.655-20.534 54.276-39.37 82.285-58.246l7.198-4.848 5.368 6.818c16.493 20.95 32.353 43.3 48.01 66.34l20.156-17.422-45.942-52.59 8.565-5.96c131.204-91.3 210.172-166.176 250.75-226.72 36.76-54.847 42.27-96.536 29.033-130.757zm-43.92 180.997c-8.493 9.98-17.84 20.227-28.086 30.757l-57.637 94.442 59.53 92.6-54.91 65.912 14.36 11.962 63.684-76.447-60.614-94.285 25.96-42.535 32.49 2.754-9.878 70.8 70.487 13.335 3.474-18.364-52.993-10.025 10.145-72.703-42.842-3.63 26.13-42.817 32.08 20.58 38.048-10.06-4.778-18.07-30.1 7.96-25.51-16.366.024-.043-.154-.04-8.912-5.717zm-171.63 153.216c-5.31 3.943-10.75 7.927-16.26 11.934L312 412.385l-1.447 88.363 18.685.307 1.62-99.004-59.323-36.527zm-99.09 58.33l-21.65 37.592 26.21 46.526 16.28-9.173-20.983-37.25 12.285-21.33c-4.025-5.53-8.07-10.986-12.143-16.363zM51.5 449.79c6.96 0 12.4 5.44 12.4 12.4s-5.44 12.402-12.4 12.402S39.1 469.15 39.1 462.19c0-6.96 5.44-12.4 12.402-12.4z"></path></g></svg>
    ]),
    'spells': [
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
    ],
    'videoPath': 'woop.mp4',
    'avatarPath': 'woop.png'
  },
  {
    'name': 'Slime',
    'description': '',
    'svgs': ([
      <svg width="64px" height="64px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ffffff" d="M319.61 20.654c13.145 33.114 13.144 33.115-5.46 63.5 33.114-13.145 33.116-13.146 63.5 5.457-13.145-33.114-13.146-33.113 5.457-63.498-33.114 13.146-33.113 13.145-63.498-5.459zM113.024 38.021c-11.808 21.04-11.808 21.04-35.724 24.217 21.04 11.809 21.04 11.808 24.217 35.725 11.808-21.04 11.808-21.04 35.724-24.217-21.04-11.808-21.04-11.808-24.217-35.725zm76.55 56.184c-.952 50.588-.95 50.588-41.991 80.18 50.587.95 50.588.95 80.18 41.99.95-50.588.95-50.588 41.99-80.18-50.588-.95-50.588-.95-80.18-41.99zm191.177 55.885c-.046 24.127-.048 24.125-19.377 38.564 24.127.047 24.127.046 38.566 19.375.047-24.126.046-24.125 19.375-38.564-24.126-.047-24.125-.046-38.564-19.375zm-184.086 83.88c-1.191.024-2.36.07-3.492.134-18.591 1.064-41.868 8.416-77.445 22.556L76.012 433.582c78.487-20.734 132.97-21.909 170.99-4.615V247.71c-18.076-8.813-31.79-13.399-46.707-13.737a91.166 91.166 0 0 0-3.629-.002zm122.686 11.42c-2.916-.026-5.81.011-8.514.098-12.81.417-27.638 2.215-45.84 4.522V427.145c43.565-7.825 106.85-4.2 171.244 7.566l-39.78-177.197c-35.904-8.37-56.589-11.91-77.11-12.123zm2.289 16.95c18.889.204 36.852 2.768 53.707 5.02l4.437 16.523c-23.78-3.75-65.966-4.906-92.467-.98l-.636-17.805c11.959-2.154 23.625-2.88 34.959-2.758zm-250.483 4.658l-10.617 46.004h24.094l10.326-46.004H71.158zm345.881 0l39.742 177.031 2.239 9.973 22.591-.152-40.855-186.852h-23.717zm-78.857 57.82c16.993.026 33.67.791 49.146 2.223l3.524 17.174c-32.645-3.08-72.58-2.889-102.995 0l-.709-17.174c16.733-1.533 34.04-2.248 51.034-2.223zm-281.793 6.18l-6.924 30.004h24.394l6.735-30.004H56.389zm274.418 27.244c4.656.021 9.487.085 14.716.203l2.555 17.498c-19.97-.471-47.115.56-59.728 1.05l-.7-17.985c16.803-.493 29.189-.828 43.157-.766zm41.476.447c8.268.042 16.697.334 24.121.069l2.58 17.74c-8.653-.312-24.87-.83-32.064-.502l-2.807-17.234a257.25 257.25 0 0 1 8.17-.073zm-326.97 20.309l-17.985 77.928 25.035-.17 17.455-77.758H45.313zm303.164 11.848c19.608-.01 38.66.774 56.449 2.572l2.996 20.787c-34.305-4.244-85.755-7.697-119.1-3.244l-.14-17.922c20.02-1.379 40.186-2.183 59.795-2.193zm-166.606 44.05c-30.112.09-67.916 6.25-115.408 19.76l-7.22 2.053 187.759-1.27v-6.347c-16.236-9.206-37.42-14.278-65.13-14.196zm134.41 6.174c-19.63.067-37.112 1.439-51.283 4.182v10.064l177.594-1.203c-44.322-8.634-89.137-13.17-126.31-13.043zM26 475v18h460v-18H26z"></path></g></svg>,
      <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 17L9 20M12 17L15 20M12 17V12M12 17V21M12 7L9 4M12 7L15 4M12 7V12M12 7V3M12 12L7.66988 9.49995M12 12L16.3301 14.4999M12 12L7.66988 14.4999M12 12L16.3301 9.49995M16.3301 14.4999L17.4282 18.598M16.3301 14.4999L20.4282 13.4019M16.3301 14.4999L19.7942 16.5M7.66988 9.49995L3.57181 10.598M7.66988 9.49995L6.57181 5.40187M7.66988 9.49995L4.20578 7.5M16.3301 9.49995L20.4282 10.598M16.3301 9.49995L17.4282 5.40187M16.3301 9.49995L19.7943 7.5M7.66988 14.4999L6.57181 18.598M7.66988 14.4999L3.57181 13.4019M7.66988 14.4999L4.20584 16.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    ]),
    'spells': [
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
      {
        'spellName': '',
        'spellDesc': '',
        'spellIconPath': '/spirit/8.png'
      },
    ],
    'videoPath': 'slime.mp4',
    'avatarPath': 'slime-web.png'
  },
]

  return (
      <section id="characterInfo" style={ pageWidth < 900 && pageWidth > 350 ? { height: videoHeight }: null}>
        <img className='charFullImage spiritFullImage' src={"./img/" + characters[props.charId].avatarPath}></img>
        <article>

        <div id="preview-character" className='borderSvgMain' style={{ height: videoHeight }}>
          <article className='charTitleClass'><h3>{characters[props.charId].name}</h3><p>{characters[props.charId].description}</p></article>
          <video
            id="charVideo"
            key={props.charId}
            width="100%"
            preload="metadata"
            playsInline="true"
            loop="true"
            muted="true"
            autoPlay="true"
            data-object-fit="cover"
            data-object-position="center center"
          >
            <source src={process.env.PUBLIC_URL + '/video/spirit/' + characters[props.charId].videoPath} type="video/mp4" />
            Votre navigateur ne prend pas en charge la lecture de la vidéo.
          </video>
        </div>
        <ul className='spellIcons'>
        <li id="autoSpirit"><button>
              <img src={"./img/icon/" + characters[props.charId].spells[0].spellIconPath}></img>
              <aside>
                <h4>{characters[props.charId].spells[0].spellName}</h4>
              </aside>
            </button></li>
          <li><button>
              <img src={"./img/icon/" + characters[props.charId].spells[1].spellIconPath}></img>
              <aside>
                <h4>{characters[props.charId].spells[1].spellName}</h4>
                <p>{characters[props.charId].spells[1].spellDesc}</p>
              </aside>
            </button></li>
            <li><button>
              <img src={"./img/icon/" + characters[props.charId].spells[2].spellIconPath}></img>
              <aside>
              <h4>{characters[props.charId].spells[2].spellName}</h4>
              <p>{characters[props.charId].spells[2].spellDesc}</p>
              </aside>
            </button></li>
            <li><button>
              <img src={"./img/icon/" + characters[props.charId].spells[3].spellIconPath}></img>
              <aside>
              <h4>{characters[props.charId].spells[3].spellName}</h4>
              <p>{characters[props.charId].spells[3].spellDesc}</p>
              </aside>
            </button></li>
            <li><button>
              <img src={"./img/icon/" + characters[props.charId].spells[4].spellIconPath}></img>
              <aside>
                <h4>{characters[props.charId].spells[4].spellName}</h4>
                <p>{characters[props.charId].spells[4].spellDesc}</p>
              </aside>
            </button></li>
        </ul>

        </article>
      </section>
  );
}

export default Character;
