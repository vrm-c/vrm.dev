// https://github.com/facebook/docusaurus/blob/main/website/src/data/users.tsx
// を参考に。
import type { TagType } from "./tags";

// Inspired by https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_sortby-and-_orderby
export function sortBy<T>(
  array: T[],
  getter: (item: T) => string | number | boolean,
): T[] {
  const sortedArray = [...array];
  sortedArray.sort((a, b) =>
    // eslint-disable-next-line no-nested-ternary
    getter(a) > getter(b) ? 1 : getter(b) > getter(a) ? -1 : 0,
  );
  return sortedArray;
}

export type UserInfo = {
  title: string;
  url: string;
  description?: string;
};
export type User = {
  tag: TagType,
  ja: UserInfo,
  en?: UserInfo,
  // `1.0 support` or `1.0 only` or `0.x only` else ?
  vrm?: string,
};

// Add sites to this list
// prettier-ignore
const Users: User[] = [
  // CharacterPlatform
  {
    tag: 'CharacterPlatform',
    ja: {
      title: 'ザ・シードオンライン',
      url: 'https://seed.online/',
      description: '`1.0` アップロード可。3D viewer は `1.0` 未対応',
    },
    vrm: '1.0',
  },
  {
    tag: 'CharacterPlatform',
    ja: {
      title: 'ニコニ立体',
      url: 'https://3d.nicovideo.jp/',
    }
  },
  {
    tag: 'CharacterPlatform',
    ja: {
      title: 'VRoid Hub',
      url: 'https://hub.vroid.com/',
    },
    vrm: '1.0',
  },
  {
    tag: 'CharacterPlatform',
    ja: {
      title: 'DMM VR CONNECT',
      url: 'https://connect.vrlab.dmm.com/',
    },
  },
  {
    tag: 'CharacterPlatform',
    ja: {
      title: 'CryptoAvatars',
      url: 'https://cryptoavatars.io/home',
      description: 'アバターの所有権と相互運用性を可能にするブロックチェーンプロトコル',
    },
  },
  {
    tag: 'CharacterPlatform',
    ja: {
      title: 'VIPE - Virtual Persona',
      url: 'https://vipe.io',
      description: 'アーティストのためのオールインワンアバタープラットフォーム、マーケットプレイス、およびハブ',
    },
  },
  // ImporterExporter
  {
    tag: 'ImporterExporter',
    ja: {
      title: 'UniVRM',
      url: 'https://github.com/vrm-c/UniVRM',
      description: 'Unityエディタ拡張, Unityライブラリ。 `1.0` 版は `0.x` と両方がロードできます'
    },
    vrm: '1.0',
  },
  {
    tag: 'ImporterExporter',
    ja: {
      title: '@pixiv/three-vrm',
      url: 'https://github.com/pixiv/three-vrm/',
      description: 'Three.js用ライブラリ。従来のVRMとVRM 1.0の双方がロードできます'
    },
    vrm: '1.0'
  },
  {
    tag: 'ImporterExporter',
    ja: {
      title: 'VRM Add-on for Blender',
      url: 'https://vrm-addon-for-blender.info/ja',
      description: 'Blenderアドオン'
    },
  },
  {
    tag: 'ImporterExporter',
    ja: {
      title: 'VRM4U',
      url: 'https://github.com/ruyo/VRM4U',
      description: 'UnrealEngineプラグイン'
    },
  },
  {
    tag: 'ImporterExporter',
    ja: {
      title: 'godot-vrm',
      url: 'https://github.com/V-Sekai/godot-vrm',
      description: 'Godotアドオン'
    },
  },
  {
    tag: 'ImporterExporter',
    ja: {
      title: 'glTF-Maya-Exporter',
      url: 'https://github.com/kashikacojp/glTF-Maya-Exporter',
      description: 'Mayaスクリプト'
    }
  },
  {
    tag: 'ImporterExporter',
    ja: {
      title: 'VRM Converter for VRChat',
      url: 'https://pokemori.booth.pm/items/1025226',
      description: 'Unityエディタ拡張'
    },
  },
  {
    tag: 'ImporterExporter',
    ja: {
      title: 'UniVRMExtensions',
      url: 'https://pokemori.booth.pm/items/1788660',
      description: 'Unityエディタ拡張'
    },
  },
  // CharacterCreation
  {
    tag: 'CharacterCreation',
    ja: {
      title: 'VRoid Studio',
      url: 'https://vroid.com/studio/',
      description: 'Windows, macOS'
    }
  },
  {
    tag: 'CharacterCreation',
    ja: {
      title: 'VRoid Mobile',
      url: 'https://vroid.com/mobile/',
      description: 'iOS, Android'
    },
  },
  {
    tag: 'CharacterCreation',
    ja: {
      title: 'セシル変身アプリ',
      url: 'https://fantia.jp/fanclubs/10552',
      description: 'Windows, macOS'
    },
  },
  // Broadcaster
  {
    tag: 'Broadcaster',
    ja: {
      title: 'VDRAW',
      url: 'https://sites.google.com/view/vdraw/',
      description: 'Windows'
    }
  },
  {
    tag: 'Broadcaster',
    ja: {
      title: 'SHOWROOM V',
      url: 'https://campaign.showroom-live.com/showroom-v/',
      description: 'iOS'
    }
  },
  {
    tag: 'Broadcaster',
    ja: {
      title: 'Hitogata',
      url: 'https://sites.google.com/site/vhitogata/',
      description: 'Windows'
    }
  },
  {
    tag: 'Broadcaster',
    ja: {
      title: '3tene',
      url: 'https://3tene.com/',
      description: 'Windows, macOS'
    }
  },
  {
    tag: 'Broadcaster',
    ja: {
      title: 'Wakaru',
      url: 'https://store.steampowered.com/app/870820/Wakaru_ver_beta/',
      description: 'Windows'
    }
  },
  {
    tag: 'Broadcaster',
    ja: {
      title: 'バーチャルモーションキャプチャー',
      url: 'https://sh-akira.github.io/VirtualMotionCapture/',
      description: 'Windows VR'
    }
  },
  {
    tag: 'Broadcaster',
    ja: {
      title: 'FaceVTuber',
      url: 'https://facevtuber.com/',
      description: 'Google Chrome'
    }
  },
  {
    tag: 'Broadcaster',
    ja: {
      title: 'LiveAvatar',
      url: 'https://github.com/m2wasabi/LiveAvatar',
      description: 'HTC VIVE'
    }
  },
  {
    tag: 'Broadcaster',
    ja: {
      title: 'Luppet',
      url: 'https://luppet.appspot.com/',
      description: 'Windows + optional hand tracking'
    }
  },
  {
    tag: 'Broadcaster',
    ja: {
      title: 'vear',
      url: 'https://apps.apple.com/jp/app/vear/id1490697369',
      description: 'iOS'
    }
  },
  {
    tag: 'Broadcaster',
    ja: {
      title: 'CharWebCam',
      url: 'https://github.com/xelloss120/CharWebCam',
      description: 'Windows'
    }
  },
  {
    tag: 'Broadcaster',
    ja: {
      title: 'VMagicMirror',
      url: 'https://malaybaku.github.io/VMagicMirror/',
      description: 'Windows'
    }
  },
  {
    tag: 'Broadcaster',
    ja: {
      title: '2DR',
      url: 'https://2dr.info/',
      description: 'iOS, Android'
    }
  },
  {
    tag: 'Broadcaster',
    ja: {
      title: 'VUP-VTuber',
      url: 'https://store.steampowered.com/app/1207050/VUPVTuber_Maker_Animation_MMDLive2D__facial_capture/',
      description: 'Windows 10'
    }
  },
  {
    tag: 'Broadcaster',
    ja: {
      title: 'ミチコンPlus',
      url: 'https://www.next-system.com/michicon',
      description: 'iOS'
    }
  },
  {
    tag: 'Broadcaster',
    ja: {
      title: 'VOVOLA',
      url: 'https://vovola.wixsite.com/website',
      description: 'Windows 10'
    }
  },
  {
    tag: 'Broadcaster',
    ja: {
      title: 'VSeeFace',
      url: 'https://www.vseeface.icu/',
      description: 'Windows + optional hand tracking'
    }
  },
  {
    tag: 'Broadcaster',
    ja: {
      title: 'ZZ3D',
      url: 'https://halmin.wixsite.com/zz3d',
      description: 'iOS'
    }
  },
  {
    tag: 'Broadcaster',
    ja: {
      title: 'LIV',
      url: 'https://liv.tv/',
      description: 'Windows VR'
    }
  },
  {
    tag: 'Broadcaster',
    ja: {
      title: 'Animaze by FaceRig',
      url: 'https://store.steampowered.com/app/1364390/Animaze_by_FaceRig/',
      description: 'Windows'
    }
  },
  {
    tag: 'Broadcaster',
    ja: {
      title: 'VTmini',
      url: 'https://store.steampowered.com/app/1801480/VTmini/',
      description: 'Windows'
    }
  },
  {
    tag: 'Broadcaster',
    ja: {
      title: 'JINS MEME VTUNER',
      url: 'https://apps.apple.com/jp/app/jins-meme-vtuner/id1554040568',
      description: 'iOS'
    }
  },
  {
    tag: 'Broadcaster',
    ja: {
      title: 'RiBLA Broadcast',
      url: 'https://ribla-laboratory.booth.pm/items/3642935',
      description: 'Windows, macOS'
    }
  },
  {
    tag: 'Broadcaster',
    ja: {
      title: 'Vフレット',
      url: 'https://nkjzm.jp/vfret',
      description: 'Windows, macOS'
    }
  },
  {
    tag: 'Broadcaster',
    ja: {
      title: 'Avatar.Webcam',
      url: 'https://avatar.webcam',
      description: 'Windows, macOS'
    }
  },
  // MotionCapture
  {
    tag: 'MotionCapture',
    ja: {
      title: 'TRACKING WORLD',
      url: 'http://deatrathias.net/TW/',
      description: 'Windows VR'
    }
  },
  {
    tag: 'MotionCapture',
    ja: {
      title: 'waidayo',
      url: 'https://booth.pm/ja/items/1779185',
      description: 'PC, iOS'
    }
  },
  {
    tag: 'MotionCapture',
    ja: {
      title: 'ThreeDPoseTracker',
      url: 'https://github.com/digital-standard/ThreeDPoseTracker',
      description: 'Windows'
    }
  },
  {
    tag: 'MotionCapture',
    ja: {
      title: 'TDPT',
      url: 'https://digital-standard.com/tdpt_lp/',
      description: 'iOS'
    }
  },
  {
    tag: 'MotionCapture',
    ja: {
      title: 'EasyVirtualMotionCaptureForUnity',
      url: 'https://booth.pm/ja/items/1801535',
      description: 'Windows, Windows VR'
    }
  },
  {
    tag: 'MotionCapture',
    ja: {
      title: 'Webcam Motion Capture',
      url: 'https://webcammotioncapture.info/ja/index.php',
      description: 'Windows, macOS'
    }
  },
  {
    tag: 'MotionCapture',
    ja: {
      title: 'iFacialMocap',
      url: 'https://www.ifacialmocap.com/home/japanese/',
      description: 'Windows, macOS, iOS'
    }
  },
  {
    tag: 'MotionCapture',
    ja: {
      title: 'FACEMOTION3D',
      url: 'https://apps.apple.com/jp/app/facemotion3d/id1507538005',
      description: 'iOS'
    }
  },
  {
    tag: 'MotionCapture',
    ja: {
      title: 'Kalidoface 3D',
      url: 'https://github.com/yeemachine/kalidoface-3d',
      description: 'Windows'
    }
  },
  {
    tag: 'MotionCapture',
    ja: {
      title: 'VIRTU: Avatar Camera',
      url: 'https://virtu.booth.pm/items/3684467',
      description: 'PC, [iOS](https://apps.apple.com/app/virtu-avatar-camera/id1597220065)'
    }
  },
  {
    tag: 'MotionCapture',
    ja: {
      title: 'VRigUnity',
      url: 'https://github.com/Kariaro/VRigUnity',
      description: 'Windows, macOS, Linux'
    }
  },
  // Animation
  {
    tag: 'Animation',
    ja: {
      title: 'Ls ENGINE',
      url: 'https://lsengine.net/',
      description: 'Windows'
    }
  },
  {
    tag: 'Animation',
    ja: {
      title: 'AI4Animation',
      url: 'https://github.com/t-takasaka/AI4Animation/tree/master/AI4Animation/Assets/Demo/ARKit',
      description: 'Unityライブラリ'
    }
  },
  {
    tag: 'Animation',
    ja: {
      title: 'Dance Dance Maker!',
      url: 'https://booth.pm/ja/items/2216222',
      description: 'Oculus Quest'
    }
  },
  {
    tag: 'Animation',
    ja: {
      title: 'DanceDreamMV',
      url: 'https://maruapps.com/dancedreammv/',
      description: 'iOS, Android'
    }
  },
  {
    tag: 'Animation',
    ja: {
      title: 'Doll Dancer',
      url: 'https://play.google.com/store/apps/details?id=com.personuo.dolldancer',
      description: '[iOS](https://apps.apple.com/jp/app/doll-dancer-mmd-vroid-amv-app/id1394822854?platform=iphone), Android'
    }
  },
  {
    tag: 'Animation',
    ja: {
      title: 'Dan Sing Sing MV Maker',
      url: 'https://vtubershop.booth.pm/items/3366941',
      description: 'Windows'
    }
  },
  //  Photograph
  {
    tag: 'Photograph',
    ja: {
      title: 'VRMお人形遊びPC版',
      url: 'https://120byte.booth.pm/items/1654585',
      description: 'Windows'
    }
  },
  {
    tag: 'Photograph',
    ja: {
      title: 'VRMお人形遊び',
      url: 'https://120byte.booth.pm/items/1099618',
      description: 'Windows VR'
    }
  },
  {
    tag: 'Photograph',
    ja: {
      title: 'Vタビ',
      url: 'https://app.famitsu.com/gametitle/8356/',
      description: 'Android, iOS'
    }
  },
  {
    tag: 'Photograph',
    ja: {
      title: 'Vismuth',
      url: 'https://vismuth.com/',
      description: 'Android, iOS'
    }
  },
  {
    tag: 'Photograph',
    ja: {
      title: 'Vスタンプ',
      url: 'https://bnut.jp/vstamp',
      description: 'Android, iOS'
    }
  },
  {
    tag: 'Photograph',
    ja: {
      title: 'VRM Automatic Photographing',
      url: 'https://matsuvr.booth.pm/items/2223918',
      description: 'Windows 10'
    }
  },
  {
    tag: 'Photograph',
    ja: {
      title: 'VRMCardMaker',
      url: 'https://booth.pm/ja/items/1808860',
      description: 'Windows'
    }
  },
  {
    tag: 'Photograph',
    ja: {
      title: 'Pose Arch',
      url: 'https://apps.apple.com/jp/app/pose-arch/id1483326327',
      description: 'iOS'
    }
  },
  {
    tag: 'Photograph',
    ja: {
      title: 'COCOPStudio',
      url: 'https://cocop.site/cocopstudio/',
      description: 'Android, iOS, Windows'
    }
  },
  {
    tag: 'Photograph',
    ja: {
      title: 'Emmv Studio',
      url: 'https://booth.pm/ja/items/2495794',
      description: 'Windows'
    }
  },
  {
    tag: 'Photograph',
    ja: {
      title: 'PaSha!',
      url: 'https://ayato3d.booth.pm/items/2202577',
      description: 'Windows 10'
    }
  },
  {
    tag: 'Photograph',
    ja: {
      title: 'PoseMixerAR',
      url: 'https://maruapps.com/posemixerar/',
      description: 'Android, iOS'
    }
  },
  {
    tag: 'Photograph',
    ja: {
      title: 'VRMポージング',
      url: 'https://store.steampowered.com/app/1895630/VRM_Posing_Desktop/',
      description: '[Desktop](https://evelyngamedev.com/vrmposing-desktop/), [Mobile](https://evelyngamedev.com/vrmposing-mobile/)'
    }
  },
  // Metaverse
  {
    tag: 'Metaverse',
    ja: {
      title: 'バーチャルキャスト',
      url: 'https://virtualcast.jp/',
      description: ' [Windows VR](https://store.steampowered.com/app/947890/VirtualCast/), [Oculus Quest](https://www.oculus.com/experiences/quest/4174249979259348/)'
    },
    vrm: '1.0'
  },
  {
    tag: 'Metaverse',
    ja: {
      title: 'cluster',
      url: 'https://cluster.mu/',
      description: ' PCVR, Windows, macOS, iOS, Android'
    },
  },
  {
    tag: 'Metaverse',
    ja: {
      title: 'Clarie',
      url: 'https://biscrat.booth.pm/items/1193414',
      description: ' Windows VR'
    },
  },
  {
    tag: 'Metaverse',
    ja: {
      title: 'Exokit',
      url: 'https://github.com/exokitxr/avatars',
      description: ' Windows, macOS, Linux, VR'
    },
  },
  {
    tag: 'Metaverse',
    ja: {
      title: 'TECO',
      url: 'https://teco-vr.com/',
      description: ' Windows, macOS, Oculus'
    },
  },
  {
    tag: 'Metaverse',
    ja: {
      title: 'コラボル',
      url: 'https://brother-pv.booth.pm/items/2016717',
      description: ' Windows VR'
    },
  },
  {
    tag: 'Metaverse',
    ja: {
      title: 'Webaverse',
      url: 'https://webaverse.com/',
      description: ' Web browser'
    },
  },
  {
    tag: 'Metaverse',
    ja: {
      title: 'ambr',
      url: 'https://ambr.co.jp/',
      description: ' Windows VR, macOS'
    },
  },
  {
    tag: 'Metaverse',
    ja: {
      title: 'Connect Chat',
      url: 'https://store.steampowered.com/app/1424930/Connect_Chat/',
      description: ' Windows VR'
    },
  },
  {
    tag: 'Metaverse',
    ja: {
      title: 'VZero',
      url: 'https://facevtuber.com/vzero/',
      description: ' Web browser'
    },
  },
  {
    tag: 'Metaverse',
    ja: {
      title: 'Substrata',
      url: 'https://substrata.info/',
      description: ' Windows, MacOS, Linux'
    },
  },
  {
    tag: 'Metaverse',
    ja: {
      title: 'Hyperfy',
      url: 'https://hyperfy.io/',
      description: ' Web browser, mobile ↔️ VR'
    },
  },
  {
    tag: 'Metaverse',
    ja: {
      title: 'Mona',
      url: 'https://monaverse.com',
      description: ' Web browser'
    },
    vrm: '1.0'
  },
  {
    tag: 'Game',
    ja: {
      title: 'Vワールド',
      url: 'https://naby.booth.pm/items/990663',
      description: 'Windows'
    }
  },
  {
    tag: 'Game',
    ja: {
      title: 'SEIYA',
      url: 'https://wandv.jp/seiya/',
      description: 'Windows VR'
    }
  },
  {
    tag: 'Game',
    ja: {
      title: 'BONFIRE~焚き火~',
      url: 'https://orenodinner.booth.pm/items/952450',
      description: 'Oculus Go'
    }
  },
  {
    tag: 'Game',
    ja: {
      title: 'つんつんVR',
      url: 'https://store.steampowered.com/app/867090/VR__TSUNTSUN_VR/',
      description: 'Windows VR'
    }
  },
  {
    tag: 'Game',
    ja: {
      title: 'コロコロシステム',
      url: 'https://www.mediaplex.co.jp/korokoro/',
      description: 'Oculus Rift'
    }
  },
  {
    tag: 'Game',
    ja: {
      title: 'パイロットクロス',
      url: 'https://n-mattun.booth.pm/',
      description: 'Windows VR'
    }
  },
  {
    tag: 'Game',
    ja: {
      title: 'プリミティア',
      url: 'https://store.steampowered.com/app/1745170/Primitier/',
      description: 'Windows VR'
    }
  },
  {
    tag: 'Game',
    ja: {
      title: 'Synth Riders',
      url: 'https://store.steampowered.com/app/885000/Synth_Riders/',
      description: 'Windows VR'
    }
  },
  {
    tag: 'Game',
    ja: {
      title: 'SOUNDART',
      url: 'https://store.steampowered.com/app/1144460/SOUNDART/',
      description: 'Windows VR'
    }
  },
  {
    tag: 'Game',
    ja: {
      title: 'VRAST!',
      url: 'https://rc-cobalt.booth.pm/items/1756359',
      description: 'Windows'
    }
  },
  {
    tag: 'Game',
    ja: {
      title: 'Legend of the Shieldbearers',
      url: 'https://www.spacepupstudio.com/lots',
      description: 'Oculus Rift/Oculus Quest'
    }
  },
  {
    tag: 'Game',
    ja: {
      title: 'BOW MAN',
      url: 'https://bowman.vrlab.dmm.com/ja/',
      description: 'Windows VR'
    }
  },
  {
    tag: 'Game',
    ja: {
      title: 'Craftopia',
      url: 'https://store.steampowered.com/app/1307550/Craftopia/',
      description: 'Windows'
    }
  },
  {
    tag: 'Game',
    ja: {
      title: 'RESONARK X',
      url: 'https://store.steampowered.com/app/1366570/RESONARK_X/',
      description: 'Windows VR, [Oculus Quest](https://www.oculus.com/experiences/quest/3405379359561787/)'
    }
  },
  {
    tag: 'Game',
    ja: {
      title: 'ラクキン',
      url: 'https://rakugaki-kingdom.com/',
      description: 'iOS, Android'
    }
  },
  {
    tag: 'Game',
    ja: {
      title: 'FantasySeed',
      url: 'https://booth.pm/ja/items/1293100',
      description: 'Windows'
    }
  },
  {
    tag: 'Game',
    ja: {
      title: 'Roduet',
      url: 'https://fujisunflower.booth.pm/items/2510498',
      description: 'Windows'
    }
  },
  {
    tag: 'Game',
    ja: {
      title: 'Cube Art World',
      url: 'https://simplestar-game.booth.pm/items/2622434',
      description: 'Windows'
    }
  },
  {
    tag: 'Game',
    ja: {
      title: 'TouroReminiscence',
      url: 'https://booth.pm/ja/items/2349960',
      description: 'Windows'
    }
  },
  {
    tag: 'Game',
    ja: {
      title: 'VRM Cyber walk',
      url: 'https://ktamayan.booth.pm/items/2790105',
      description: 'Windows'
    }
  },
  {
    tag: 'Game',
    ja: {
      title: 'Virtual Home Run Derby',
      url: 'https://paldynojosh.booth.pm/items/1485218',
      description: 'Windows'
    }
  },
  {
    tag: 'Game',
    ja: {
      title: 'フードデリバリーバトル',
      url: 'https://store.steampowered.com/app/1708710/Food_Delivery_Battle/',
      description: 'Windows'
    }
  },
  {
    tag: 'Game',
    ja: {
      title: '古銭プッシャーフレンズ',
      url: 'https://store.steampowered.com/app/1722020/Old_Coin_Pusher_Friends/',
      description: 'Windows'
    }
  },
  {
    tag: 'Game',
    ja: {
      title: 'AVATAVI',
      url: 'https://avatavi.com/jp/index.html',
      description: 'iOS'
    }
  },
  // WebBrowser
  {
    tag: 'WebBrowser',
    ja: {
      title: 'あけろ！爆裂駐車場！',
      url: 'https://unityroom.com/games/bakuretsu',
      description: ''
    }
  },
  {
    tag: 'WebBrowser',
    ja: {
      title: 'スーパーエクストリームVRMサッカー',
      url: 'https://unityroom.com/games/hyperdimension-virtual-super-extreme-vrm-soccer',
      description: ''
    }
  },
  {
    tag: 'WebBrowser',
    ja: {
      title: '密ッションインポッシブル',
      url: 'https://unityroom.com/games/mitsussion',
      description: ''
    }
  },
  {
    tag: 'WebBrowser',
    ja: {
      title: 'スーパーVRMブラザーズ3D',
      url: 'https://unityroom.com/games/aguroshoutest',
      description: ''
    }
  },
  {
    tag: 'WebBrowser',
    ja: {
      title: 'ペースアップ！',
      url: 'https://unityroom.com/games/paseup',
      description: ''
    }
  },
  {
    tag: 'WebBrowser',
    ja: {
      title: '二輪VRM',
      url: 'https://unityroom.com/games/vrm_bike',
      description: ''
    }
  },
  {
    tag: 'WebBrowser',
    ja: {
      title: 'VRM三段跳び',
      url: 'https://unityroom.com/games/vrmtriplejump',
      description: ''
    }
  },
  {
    tag: 'WebBrowser',
    ja: {
      title: '(超)STEP PANEL MATCH',
      url: 'https://unityroom.com/games/step-panel-match',
      description: ''
    }
  },
  {
    tag: 'WebBrowser',
    ja: {
      title: 'Vブレード',
      url: 'https://unityroom.com/games/vblade',
      description: ''
    }
  },
  // Viweer
  {
    tag: 'Viewer',
    ja: {
      title: 'Babylon VRM Viewer',
      url: 'https://github.com/virtual-cast/babylon-vrm-loader/',
      description: 'Babylon.js拡張 '
    }
  },
  {
    tag: 'Viewer',
    ja: {
      title: 'VPocket',
      url: 'https://booooooh.booth.pm/items/1033823',
      description: 'Android, iOS '
    }
  },
  {
    tag: 'Viewer',
    ja: {
      title: 'VRMビュアー',
      url: 'https://w.atwiki.jp/beamman/',
      description: 'Windows '
    }
  },
  {
    tag: 'Viewer',
    ja: {
      title: 'VRM Viewer',
      url: 'https://vrm-viewer.yukimochi.io/',
      description: 'Webブラウザ '
    }
  },
  {
    tag: 'Viewer',
    ja: {
      title: 'VRMQuickLook',
      url: 'https://github.com/magicien/VRMQuickLook',
      description: 'macOS '
    }
  },
  {
    tag: 'Viewer',
    ja: {
      title: 'VRM Live Viewer',
      url: 'https://booth.pm/ja/items/1783082',
      description: 'Windows '
    }
  },
  {
    tag: 'Viewer',
    ja: {
      title: 'UniWinApi Example project',
      url: 'https://github.com/kirurobo/UniWinApi',
      description: 'Unityライブラリ '
    }
  },
  {
    tag: 'Viewer',
    ja: {
      title: 'KinectV2VRM',
      url: 'https://github.com/m2wasabi/KinectV2VRM',
      description: 'Unityライブラリ '
    }
  },
  {
    tag: 'Viewer',
    ja: {
      title: 'MocuMocuVRM',
      url: 'http://www.vrai.jp/vr_mocuvrm.html',
      description: 'Windows VR, Looking Glass '
    }
  },
  {
    tag: 'Viewer',
    ja: {
      title: 'VRM Display',
      url: 'https://akarimichi.github.io/vrm-display-releases/',
      description: 'Windows '
    }
  },
  {
    tag: 'Viewer',
    ja: {
      title: 'Desktop Magic Engine',
      url: 'https://store.steampowered.com/app/1096550/Desktop_Magic_Engine/',
      description: 'Windows '
    }
  },
  {
    tag: 'Viewer',
    ja: {
      title: 'TSO AR Viewer',
      url: 'https://seed.online/static/guide-arviewer',
      description: 'Android, iOS '
    }
  },
  // UsingInternal
  {
    tag: 'UsingInternal',
    ja: {
      title: 'Vカツ',
      url: 'http://vkatsu.jp/',
      description: 'Windows, iOS, Android '
    }
  },
  {
    tag: 'UsingInternal',
    ja: {
      title: 'カスタムキャスト',
      url: 'https://customcast.jp/',
      description: 'iOS, Android '
    }
  },
  {
    tag: 'UsingInternal',
    ja: {
      title: 'REALITY',
      url: 'https://reality.wrightflyer.net/',
      description: 'iOS, Android '
    }
  },
  {
    tag: 'UsingInternal',
    ja: {
      title: 'パペ文字',
      url: 'https://www.puppemoji.com/',
      description: 'iOS '
    }
  },
  {
    tag: 'UsingInternal',
    ja: {
      title: 'メイアライブオーダーメイド版',
      url: 'https://materializer.co/lab/mayalive',
      description: 'Windows, macOS '
    }
  },
  {
    tag: 'UsingInternal',
    ja: {
      title: 'MakeAvatar',
      url: 'https://gugenka.jp/digital/make_avatar.php',
      description: 'iOS, Android '
    }
  },
  // Otehr
  {
    tag: 'Other',
    ja: {
      title: 'VRMLoaderUI',
      url: 'https://github.com/m2wasabi/VRMLoaderUI',
      description: 'Unityライブラリ '
    }
  },
  {
    tag: 'Other',
    ja: {
      title: 'テアトル',
      url: 'https://teator.jp/',
      description: 'Windows 10 '
    }
  },
  {
    tag: 'Other',
    ja: {
      title: 'NeoRoidHub for Unity',
      url: 'https://neoseast-japan.booth.pm/items/2562276',
      description: 'Unityエディタ拡張 '
    }
  },
  {
    tag: 'Other',
    ja: {
      title: 'Virtual Presentation Space',
      url: 'https://eyesout.itch.io/virtual-presentation-space',
      description: 'Windows VR '
    }
  },
  {
    tag: 'Other',
    ja: {
      title: 'VTuber Editor',
      url: 'https://store.steampowered.com/app/1454500/VTuber_Editor/',
      description: 'Windows '
    }
  },
  {
    tag: 'Other',
    ja: {
      title: 'ACUAH β',
      url: 'https://riemgoshawk.booth.pm/items/1990160',
      description: 'Android '
    }
  },
  {
    tag: 'Other',
    ja: {
      title: 'TIFA',
      url: 'https://melonspeedruns.itch.io/tifa',
      description: 'Windows '
    }
  },
  {
    tag: 'Other',
    ja: {
      title: 'STYLY',
      url: 'https://styly.cc/',
      description: 'Windows, Windows VR, Android, iOS '
    }
  },
  {
    tag: 'Other',
    ja: {
      title: '[HANA] BlendShapeをコントロールするツール',
      url: 'https://kuniyan.booth.pm/items/2437978',
      description: 'Windows '
    }
  },
  {
    tag: 'Other',
    ja: {
      title: 'Virtual Studio',
      url: 'https://natsunatsu.booth.pm/items/2956377',
      description: 'Windows '
    }
  },
  {
    tag: 'Other',
    ja: {
      title: 'VRM表情設定するやつ',
      url: 'https://120byte.booth.pm/items/2152326',
      description: 'Windows '
    }
  },
  {
    tag: 'Other',
    ja: {
      title: 'VRMテクスチャ差し替えるやつ',
      url: 'https://120byte.booth.pm/items/2177538',
      description: 'Windows '
    }
  },
  {
    tag: 'Other',
    ja: {
      title: 'アイテムショップ',
      url: 'https://suzuki-cecil.booth.pm/items/3250368',
      description: 'Windows '
    }
  },
  {
    tag: 'Other',
    ja: {
      title: 'meebits-blender-utils',
      url: 'https://github.com/MeebitsDAO/meebits-blender-utils',
      description: 'Windows '
    }
  },
  {
    tag: 'Other',
    ja: {
      title: 'The Meebits - Larva Labs',
      url: 'https://meebits.larvalabs.com/',
      description: 'Windows '
    }
  },
  {
    tag: 'Other',
    ja: {
      title: 'ミロックプラス',
      url: 'https://www.miloq-plus.com/',
      description: 'Android, iOS '
    }
  },
  {
    tag: 'Other',
    ja: {
      title: 'SimpleURPToonLitOutlineExample',
      url: 'https://github.com/simplestargame/SimpleURPToonLitOutlineExample',
      description: 'Windows '
    }
  },
  {
    tag: 'Other',
    ja: {
      title: 'Kalidokit',
      url: 'https://github.com/yeemachine/kalidokit',
      description: 'Windows '
    }
  },
  {
    tag: 'Other',
    ja: {
      title: 'Wicked Engine',
      url: 'https://github.com/turanszkij/WickedEngine',
      description: 'Windows, Linux, Xbox Series, PlayStation 5 '
    }
  },];

function sortUsers() {
  let result = Users;
  // // Sort by site name
  // result = sortBy(result, (user) => user.title.toLowerCase());
  // // Sort by favorite tag, favorites first
  // result = sortBy(result, (user) => !user.tags.includes('favorite'));
  return result;
}

export const sortedUsers = sortUsers();

