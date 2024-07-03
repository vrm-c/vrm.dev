import type { User } from "./user.d.ts";
import { TagFlags as F } from "./tagflags";
import { PlatformFlags as P } from "./platformflags";

// Add sites to this list
// prettier-ignore
export const users: User[] = [
  {
    "flags": F.CharacterPlatform | F.Vrm10,
    "ja": {
      "title": "ザ・シードオンライン",
      "url": "https://virtualcast.jp/store/",
      "description": "`1.0` アップロード可。3D viewer は `1.0` 未対応",
      "preview": "https://virtualcast.jp/img/common/logo/virtual_cast_570_270_white.png"
    },
    "en": {
      "title": "The Seed Online",
      "description": "`1.0` can be uploaded. 3D viewer does not support `1.0`",
    },
  },
  {
    "flags": F.CharacterPlatform,
    "ja": {
      "title": "ニコニ立体",
      "url": "https://3d.nicovideo.jp/",
      "preview": "https://3d.nicovideo.jp/images/ogp.png",
      "description": "3D投稿サービス「ニコニ立体」"
    },
    "en": {
      "title": "Niconi Solid",
    }
  },
  {
    "flags": F.CharacterPlatform | F.Vrm10 | F.VrmAnimation,
    "ja": {
      "title": "VRoid Hub",
      "url": "https://hub.vroid.com/",
      "preview": "https://hub.vroid.com/public/images/ogp/default_ja.png",
      "description": "VRoid Hubは、3Dキャラクターのための投稿・共有プラットフォームです。モデルデータをアップロードするだけでキャラクターが活き活きとアニメーションするプロフィールページを作成でき、利用条件と共にモデルデータを配布することもできます。登録した3Dモデルは、VRoid Hubと連携した各種VR/ARプラットフォームや3Dコンテンツ上で利用可能です"
    },
    "en": {
      "title": "VRoid Hub",
      "url": "https://hub.vroid.com/en/",
      "preview": "https://hub.vroid.com/public/images/ogp/default_en.png",
      "description": "VRoid Hub is a platform where users can post their 3D characters and share them with other users. With VRoid Hub, users can post their own 3D models to make their characters come alive thanks to a vast range of animations available on the character's profile page, and distribute model data to other users by setting specific usage conditions. In addition, 3D characters posted on VRoid Hub can also be used as avatars on various VR/AR platforms and 3D contents via VRoid Hub linkage. "
    },
    "updated": new Date("2023-01-02"),
  },
  {
    "flags": F.CharacterPlatform,
    "ja": {
      "title": "CryptoAvatars",
      "url": "https://cryptoavatars.io/home",
      "description": "アバターの所有権と相互運用性を可能にするブロックチェーンプロトコル",
      "preview": "https://storage.cryptoavatars.io/vipe-web/vipe_banner.webp"
    },
    "en": {
      "title": "CryptoAvatars",
      "url": "https://cryptoavatars.io/home",
      "description": "Blockchain protocol that enables ownership and interoperability of avatars",
      "preview": "https://storage.cryptoavatars.io/vipe-web/vipe_banner.webp"
    }
  },
  {
    "flags": F.CharacterPlatform,
    "ja": {
      "title": "VIPE - Virtual Persona",
      "url": "https://vipe.io",
      "description": "アーティストのためのオールインワンアバタープラットフォーム、マーケットプレイス、およびハブ",
      "preview": "https://storage.cryptoavatars.io/vipe-web/vipe_banner.webp"
    },
    "en": {
      "title": "VIPE - Virtual Persona",
      "url": "https://vipe.io",
      "description": "All-in-One avatar platform, marketplace and hub for artists",
      "preview": "https://storage.cryptoavatars.io/vipe-web/vipe_banner.webp"
    }
  },
  {
    "flags": F.ImporterExporter | F.VrmAnimation | F.Vrm10,
    "ja": {
      "title": "UniVRM",
      "url": "https://github.com/vrm-c/UniVRM/releases",
      "description": "Unityエディタ拡張, Unityライブラリ。 `1.0` 版は `0.x` と両方がロードできます",
      "preview": "https://opengraph.githubassets.com/23b46f1ccc13b6834ec5370809e05918d9bf45aa53e0a6fe49fce61bf0384d89/vrm-c/UniVRM"
    },
    "en": {
      "title": "UniVRM",
      "url": "https://github.com/vrm-c/UniVRM/releases",
      "description": "Unity editor extension, Unity library. `1.0` version can also load `0.x`",
      "preview": "https://opengraph.githubassets.com/23b46f1ccc13b6834ec5370809e05918d9bf45aa53e0a6fe49fce61bf0384d89/vrm-c/UniVRM"
    },
  },
  {
    "flags": F.ImporterExporter | F.Vrm10 | F.VrmAnimation,
    'platforms': P.WebBrowser,
    "ja": {
      "title": "@pixiv/three-vrm",
      "url": "https://github.com/pixiv/three-vrm/",
      "description": "Three.js用ライブラリ。従来のVRMとVRM 1.0の双方がロードできます",
      "preview": "https://repository-images.githubusercontent.com/190160360/9aa13e00-d54c-11e9-9ba3-c9878cf9d28a"
    },
    "en": {
      "title": "@pixiv/three-vrm",
      "url": "https://github.com/pixiv/three-vrm/",
      "description": "A library for Three.js. Can load both past VRM and VRM 1.0",
      "preview": "https://repository-images.githubusercontent.com/190160360/9aa13e00-d54c-11e9-9ba3-c9878cf9d28a"
    },
  },
  {
    'flags': F.VrmAnimation,
    'platforms': P.WebBrowser,
    'ja': {
      'title': 'bvh to VRMA',
      'url': 'https://vrm-c.github.io/bvh2vrma/',
      'description': '[github](https://github.com/vrm-c/bvh2vrma)',
      'preview': 'https://opengraph.githubassets.com/4155634754504a292119b967bd2b3117c462966846b7b517f7c6ae6e6d56f241/vrm-c/bvh2vrma',
    },
    "updated": new Date("2024-07-03"),
  },
  {
    "flags": F.ImporterExporter | F.Vrm10 | F.VrmAnimation,
    "ja": {
      "title": "VRM Add-on for Blender",
      "url": "https://vrm-addon-for-blender.info/ja",
      "description": "Blenderアドオン",
      "preview": "https://vrm-addon-for-blender.info/ja/top.ja.png"
    },
    "en": {
      "title": "VRM Add-on for Blender",
      "url": "https://vrm-addon-for-blender.info/en",
      "description": "Blender add-on",
      "preview": "https://vrm-addon-for-blender.info/en/top.en.png"
    }
  },
  {
    "flags": F.ImporterExporter,
    "ja": {
      "title": "VRM4U",
      "url": "https://github.com/ruyo/VRM4U",
      "description": "UnrealEngineプラグイン",
      "preview": "https://opengraph.githubassets.com/d6bb2b340086c1337e376a6ccc1c9eb6edb454a50c2d24da1ee84ffacb5fbc69/ruyo/VRM4U"
    },
    "en": {
      "title": "VRM4U",
      "url": "https://github.com/ruyo/VRM4U",
      "description": "UnrealEngine plug-in",
      "preview": "https://opengraph.githubassets.com/d6bb2b340086c1337e376a6ccc1c9eb6edb454a50c2d24da1ee84ffacb5fbc69/ruyo/VRM4U"
    }
  },
  {
    "flags": F.ImporterExporter,
    "ja": {
      "title": "godot-vrm",
      "url": "https://github.com/V-Sekai/godot-vrm",
      "description": "Godotアドオン",
      "preview": "https://opengraph.githubassets.com/25cd42e306a38e8421013987bbc85e974bf8ec7c5f9f551cebf9e59cc2b91ea5/V-Sekai/godot-vrm"
    },
    "en": {
      "title": "godot-vrm",
      "url": "https://github.com/V-Sekai/godot-vrm",
      "description": "VRM addon for Godot",
      "preview": "https://opengraph.githubassets.com/25cd42e306a38e8421013987bbc85e974bf8ec7c5f9f551cebf9e59cc2b91ea5/V-Sekai/godot-vrm"
    }
  },
  {
    "flags": F.ImporterExporter,
    "ja": {
      "title": "glTF-Maya-Exporter",
      "url": "https://github.com/kashikacojp/glTF-Maya-Exporter",
      "description": "Mayaスクリプト",
      "preview": "https://opengraph.githubassets.com/42a00874ffb0255981e8e0f85484f6cbff0332a52d776aced5c220392564bb98/kashikacojp/glTF-Maya-Exporter"
    },
    "en": {
      "title": "glTF-Maya-Exporter",
      "url": "https://github.com/kashikacojp/glTF-Maya-Exporter",
      "description": "Maya script",
      "preview": "https://opengraph.githubassets.com/42a00874ffb0255981e8e0f85484f6cbff0332a52d776aced5c220392564bb98/kashikacojp/glTF-Maya-Exporter"
    }
  },
  {
    "flags": F.ImporterExporter,
    "ja": {
      "title": "VRM Converter for VRChat",
      "url": "https://pokemori.booth.pm/items/1025226",
      "description": "Unityエディタ拡張",
      "preview": "https://booth.pximg.net/c/620x620/ba01b0da-9d0b-4dd8-a9ad-3f35270de1c8/i/1025226/c639ada2-329a-4f94-9545-9d3eb2ace96e_base_resized.jpg"
    },
    "en": {
      "title": "VRM Converter for VRChat",
      "url": "https://www.v-market.work/ec/items/122/detail/",
      "description": "Unity editor extension",
      "preview": "https://vket-store-production.s3.ap-northeast-1.amazonaws.com/uploads/avatar_image/image_url/2723/medium_1282534c-ddd7-4941-af78-6c6e57f8b06a.png?X-Amz-Expires=600&X-Amz-Date=20240126T105044Z&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLW5vcnRoZWFzdC0xIkgwRgIhAKiOfVGV4LvpurjSITQT%2B7YWweoyguKXzUYxwSMmfHLrAiEA7V5PWUF5WadrWNVeBbs0pTJ%2BR8rUkgOOJ54b7%2F93p6UqgQQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARABGgwzNTAwOTU4ODQ2MTIiDFaV6KBY8mK1re2lqSrVA%2FQpsAyj%2Bg8CsqS53GgMSvTlAgjVwiflI%2BRgTprberNb8mmrfem%2B7%2Bxzjqq4f85aK567fvI29YvTQolTqxnG9taIx4kk5QggYoWr%2BTeQTQiyAiJ2fT6A86wkj65pcsf83kQlHjh0VB%2B8dCqdo06Ub0KVNipreE9lrmslxFqaRtpKpTq5R8FO5zQnAW%2BJ5gEYIwMknZKDGCHc%2BqM%2Fy%2B%2FnAduEb5FqWlURrsPx%2FhJeLL9juGLmp2C7pf%2BDK6M%2FyZ0scgIgu1u7k4L0zz%2BoXvWImXOS6jR5W%2BE%2FBs6mQvbms51%2BwChbFWtXgZQvar9Fv83Zy26%2FCL%2BvnPUK6fhi0CX6BRsLK4L6a742X%2BLB7TlkEk0kjaFaXmZVLgEOwblCp8HQW0S3F9B6pfPIg2RPh4o89CbmRJ80TXwj3YcxhQUSV3OsPOdb1mLsBpjHpsDCKKQrVGXrspUbDmrDfk3L8cLqMhjY4OhhgQg75Zo5%2F1IzbREffAFlcNPX9YYktzJvKIWCI8V2O%2BclPmlZIVGh1hML4l516I2aVC2K3s3tA3PWcP%2FAaRWz6Jl80l5HR0N6rszMbh8uS0eohgjQAX0olZtJjTDQeRVC%2B8ZqM2v5uzYbTLkD5dqS5esw97vNrQY6pAFAngYCYdtKLBF2oztudpQPtcivTDa2MJj%2BsbKGSsxDsCJnzRt2WdQayUKMx1FEtuZoZ32iy8VUZ6DGpUtCRgzZZrY7xSrnMLu15y0Nd1M85n%2BD6k3SZjnTkYrN7PZg81cA3X4zN2gtQbVebcUO%2FAgc7lZa6Qv1USPsKPlwbM%2F87GaJHjmnVotoa9iwjHKY0Dvx7iwAuNc7Y9EfYUGRTqrAjUuYpA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAVDA2XIFCI7KE2W6N%2F20240126%2Fap-northeast-1%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=d2545cba809278232bf5d93328a453821b98b2b04110466c88b2500f466762c7"
    }
  },
  {
    "flags": F.ImporterExporter,
    "ja": {
      "title": "UniVRMExtensions",
      "url": "https://pokemori.booth.pm/items/1788660",
      "description": "Unityエディタ拡張",
      "preview": "https://booth.pximg.net/c/620x620/ba01b0da-9d0b-4dd8-a9ad-3f35270de1c8/i/1788660/0e58aab0-1709-48c0-8a45-7b8fc2ef1500_base_resized.jpg"
    },
    "en": {
      "title": "UniVRMExtensions",
      "url": "https://www.v-market.work/ec/items/1066/detail/",
      "description": "Unity editor extension",
      "preview": "https://vket-store-production.s3.ap-northeast-1.amazonaws.com/uploads/avatar_image/image_url/14776/medium_ff9ebbed-bb71-421d-ab16-46523750961c0b0760535c9ce40fdff3d104468066b9.png?X-Amz-Expires=600&X-Amz-Date=20240126T105045Z&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLW5vcnRoZWFzdC0xIkgwRgIhAKiOfVGV4LvpurjSITQT%2B7YWweoyguKXzUYxwSMmfHLrAiEA7V5PWUF5WadrWNVeBbs0pTJ%2BR8rUkgOOJ54b7%2F93p6UqgQQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARABGgwzNTAwOTU4ODQ2MTIiDFaV6KBY8mK1re2lqSrVA%2FQpsAyj%2Bg8CsqS53GgMSvTlAgjVwiflI%2BRgTprberNb8mmrfem%2B7%2Bxzjqq4f85aK567fvI29YvTQolTqxnG9taIx4kk5QggYoWr%2BTeQTQiyAiJ2fT6A86wkj65pcsf83kQlHjh0VB%2B8dCqdo06Ub0KVNipreE9lrmslxFqaRtpKpTq5R8FO5zQnAW%2BJ5gEYIwMknZKDGCHc%2BqM%2Fy%2B%2FnAduEb5FqWlURrsPx%2FhJeLL9juGLmp2C7pf%2BDK6M%2FyZ0scgIgu1u7k4L0zz%2BoXvWImXOS6jR5W%2BE%2FBs6mQvbms51%2BwChbFWtXgZQvar9Fv83Zy26%2FCL%2BvnPUK6fhi0CX6BRsLK4L6a742X%2BLB7TlkEk0kjaFaXmZVLgEOwblCp8HQW0S3F9B6pfPIg2RPh4o89CbmRJ80TXwj3YcxhQUSV3OsPOdb1mLsBpjHpsDCKKQrVGXrspUbDmrDfk3L8cLqMhjY4OhhgQg75Zo5%2F1IzbREffAFlcNPX9YYktzJvKIWCI8V2O%2BclPmlZIVGh1hML4l516I2aVC2K3s3tA3PWcP%2FAaRWz6Jl80l5HR0N6rszMbh8uS0eohgjQAX0olZtJjTDQeRVC%2B8ZqM2v5uzYbTLkD5dqS5esw97vNrQY6pAFAngYCYdtKLBF2oztudpQPtcivTDa2MJj%2BsbKGSsxDsCJnzRt2WdQayUKMx1FEtuZoZ32iy8VUZ6DGpUtCRgzZZrY7xSrnMLu15y0Nd1M85n%2BD6k3SZjnTkYrN7PZg81cA3X4zN2gtQbVebcUO%2FAgc7lZa6Qv1USPsKPlwbM%2F87GaJHjmnVotoa9iwjHKY0Dvx7iwAuNc7Y9EfYUGRTqrAjUuYpA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAVDA2XIFCI7KE2W6N%2F20240126%2Fap-northeast-1%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=d94b6f8359b4bea00b31f9921910822a6dcb6abe3d5e4aad711fb8052b4c6215"
    }
  },
  {
    "flags": F.CharacterCreation,
    "platforms": P.Windows | P.macOS,
    "ja": {
      "title": "VRoid Studio",
      "url": "https://vroid.com/studio/",
      "preview": "https://vroid.com/_next/static/images/vroid-studio-ogp-jp-14b96bb956ed763f749259a0312079a1.png"
    },
    "en": {
      "title": "VRoid Studio",
      "url": "https://vroid.com/en/studio/",
      "preview": "https://vroid.com/_next/static/images/vroid-studio-ogp-en-ee999ec19debf7f483027e7d3c963be5.png"
    }
  },
  {
    "flags": F.CharacterCreation,
    "platforms": P.iOS | P.Android,
    "ja": {
      "title": "VRoid Mobile",
      "url": "https://vroid.com/mobile/",
      "preview": "https://vroid.com/_next/static/images/ogp-mobile-e2f35d7d439e8f596f67497cb0e92dd0.png"
    },
    "en": {
      "title": "VRoid Mobile",
      "url": "https://vroid.com/en/mobile/",
      "preview": "https://vroid.com/_next/static/images/ogp-mobile_en-ed40679b3c1a4b28833d140172193451.png"
    }
  },
  {
    "flags": F.CharacterCreation,
    "platforms": P.WebBrowser,
    "ja": {
      "title": "Character Studio",
      "url": "https://github.com/m3-org/CharacterStudio",
      "preview": "https://m3-org.github.io/characterstudio-docs/img/charstudio.jpg"
    },
    "en": {
      "title": "Character Studio",
      "url": "https://github.com/m3-org/CharacterStudio",
      "preview": "https://m3-org.github.io/characterstudio-docs/img/charstudio.jpg"
    }
  },
  {
    "flags": F.CharacterCreation,
    "platforms": P.Windows | P.macOS,
    "ja": {
      "title": "セシル変身アプリ",
      "url": "https://fantia.jp/fanclubs/10552",
      "preview": "https://c.fantia.jp/uploads/fanclub/ogp_image/10552/fanclub_378fed8d-7f9e-435d-8b42-d6215a6dd282.jpg"
    },
    "en": {
      "title": "CecilHenShin",
    }
  },
  {
    "flags": F.Streaming,
    "platforms": P.Windows,
    "ja": {
      "title": "VDRAW",
      "url": "https://sites.google.com/view/vdraw/",
      "preview": "https://lh5.googleusercontent.com/2HiytY5iIpMJSr7G-Aeb_TTyf9E6_pz-nT2k5gQW9DPIoxHQ3-_ot0KuXUEEumk8qnOalpgavR-mK5pb0wVWRBl5UfvErth5pHoXLreRupHlWb8B=w1280"
    },
  },
  {
    "flags": F.Streaming,
    "platforms": P.iOS,
    "ja": {
      "title": "SHOWROOM V",
      "url": "https://campaign.showroom-live.com/showroom-v/",
      "preview": "https://campaign.showroom-live.com/showroom-v/image/ogp/OGP_v3.png"
    },
  },
  {
    "flags": F.Streaming,
    "platforms": P.Windows,
    "ja": {
      "title": "Hitogata",
      "url": "https://sites.google.com/site/vhitogata/",
      "preview": "https://lh5.googleusercontent.com/0xYwhzxl1v3PCq6RwCzfpmKEHWBUUEFJXxkxooGWH6BxlYpAfyeKyoXWomkZg_CNlDRfzcpNqHElhxe1qJ0sxdlNwtU1wrw7t07fAWnDZb4tb31M6AVPxtJ2uV7Xn0j28Q=w1280"
    },
  },
  {
    "flags": F.Streaming,
    "platforms": P.Windows | P.macOS,
    "ja": {
      "title": "3tene",
      "url": "https://3tene.com/",
    },
  },
  {
    "flags": F.Streaming,
    "platforms": P.Windows,
    "ja": {
      "title": "Wakaru",
      "url": "https://store.steampowered.com/app/870820/Wakaru_ver_beta/",
      "preview": "https://cdn.akamai.steamstatic.com/steam/apps/870820/capsule_616x353.jpg?t=1697542068"
    },
  },
  {
    "flags": F.Streaming | F.MotionCapture,
    "platforms": P.WindowsVR,
    "ja": {
      "title": "バーチャルモーションキャプチャー",
      "url": "https://sh-akira.github.io/VirtualMotionCapture/",
      "preview": "https://rawcdn.githack.com/sh-akira/VirtualMotionCapture/master/docs/images/ss2.jpg"
    },
    "en": {
      "title": "VirtualMotionCapture",
    }
  },
  {
    "flags": F.Streaming | F.FaceTracking,
    "platforms": P.WebBrowser,
    "ja": {
      "title": "FaceVTuber",
      "url": "https://facevtuber.com/",
      "description": "Google Chrome"
    },
  },
  {
    "flags": F.Streaming | F.MotionCapture,
    "platforms": P.WindowsVR,
    "ja": {
      "title": "LiveAvatar",
      "url": "https://github.com/m2wasabi/LiveAvatar",
      "description": "HTC VIVE",
      "preview": "https://opengraph.githubassets.com/104e2eb3b69c9cd532a8fc8af1c785ac608d36faa5c90978ab3819d7fc38492b/m2wasabi/LiveAvatar"
    },
  },
  {
    "flags": F.Streaming | F.MotionCapture,
    "platforms": P.Windows,
    "ja": {
      "title": "Luppet",
      "url": "https://luppet.appspot.com/",
      "description": "Windows + optional hand tracking",
      "preview": "https://luppet.jp/images/ogp.jpg"
    },
  },
  {
    "flags": F.Streaming,
    "platforms": P.iOS,
    "ja": {
      "title": "vear",
      "url": "https://apps.apple.com/jp/app/vear/id1490697369",
      "preview": "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/d6/a6/ff/d6a6ff2a-8f15-c14b-77a2-c7cff32b5743/AppIcon-1x_U007emarketing-0-7-0-85-220.png/1200x630wa.png"
    },
  },
  {
    "flags": F.Streaming,
    "platforms": P.Windows,
    "ja": {
      "title": "CharWebCam",
      "url": "https://github.com/xelloss120/CharWebCam",
      "preview": "https://opengraph.githubassets.com/12c0df0cc5fd2061b32835d299468711d99d08e02d79e56d374510194416a343/xelloss120/CharWebCam"
    },
  },
  {
    "flags": F.Streaming | F.VrmAnimation,
    "platforms": P.Windows,
    "ja": {
      "title": "VMagicMirror",
      "url": "https://malaybaku.github.io/VMagicMirror/",
      "preview": "https://malaybaku.github.io/VMagicMirror/images/home/gallery_00.png"
    },
    "en": {
      "url": "https://malaybaku.github.io/VMagicMirror/en/",
    }
  },
  {
    "flags": F.Streaming,
    "platforms": P.Windows,
    "ja": {
      "title": "VUP-VTuber",
      "url": "https://store.steampowered.com/app/1207050/VUPVTuber_Maker_Animation_MMDLive2D__facial_capture/",
      "preview": "https://cdn.akamai.steamstatic.com/steam/apps/1207050/capsule_616x353.jpg?t=1687870739"
    },
    "en": {
      "url": "https://store.steampowered.com/app/1207050/",
    }
  },
  {
    "flags": F.Streaming,
    "platforms": P.iOS,
    "ja": {
      "title": "ミチコンPlus",
      "url": "https://www.next-system.com/michicon",
      "preview": "https://www.next-system.com/wp-content/uploads/2020/03/a11b4bb3ba448d1fa402ac3dc62cc91f-1.jpg"
    },
    "en": {
      "title": "Michicon Plus",
    }
  },
  {
    "flags": F.Streaming,
    "platforms": P.Windows,
    "ja": {
      "title": "VOVOLA",
      "url": "https://vovola.wixsite.com/website",
    },
    "en": {
      "title": "VOVOLA",
    }
  },
  {
    "flags": F.Streaming,
    "platforms": P.Windows,
    "ja": {
      "title": "VSeeFace",
      "url": "https://www.vseeface.icu/",
      "description": "Windows + optional hand tracking"
    },
  },
  {
    "flags": F.Streaming,
    "platforms": P.iOS,
    "ja": {
      "title": "ZZ3D",
      "url": "https://halmin.wixsite.com/zz3d",
      "preview": "https://static.wixstatic.com/media/af3e55_94ed2e0a21e7433587a549663add2d00%7Emv2.png/v1/fit/w_2500,h_1330,al_c/af3e55_94ed2e0a21e7433587a549663add2d00%7Emv2.png"
    },
  },
  {
    "flags": F.Streaming,
    "platforms": P.WindowsVR,
    "ja": {
      "title": "LIV",
      "url": "https://liv.tv/",
      "preview": "https://cdn.liv.tv/images/og.jpg"
    },
  },
  {
    "flags": F.Streaming,
    "platforms": P.Windows,
    "ja": {
      "title": "Animaze by FaceRig",
      "url": "https://store.steampowered.com/app/1364390/Animaze_by_FaceRig/",
      "preview": "https://cdn.akamai.steamstatic.com/steam/apps/1364390/capsule_616x353.jpg?t=1693380615"
    },
  },
  {
    "flags": F.Streaming,
    "platforms": P.Windows,
    "ja": {
      "title": "VTmini",
      "url": "https://store.steampowered.com/app/1801480/VTmini/",
      "preview": "https://cdn.akamai.steamstatic.com/steam/apps/1801480/capsule_616x353.jpg?t=1669986072"
    },
  },
  {
    "flags": F.Streaming,
    "platforms": P.iOS,
    "ja": {
      "title": "JINS MEME VTUNER",
      "url": "https://apps.apple.com/jp/app/jins-meme-vtuner/id1554040568",
    },
  },
  {
    "flags": F.Streaming,
    "platforms": P.Windows | P.macOS,
    "ja": {
      "title": "RiBLA Broadcast",
      "url": "https://ribla-laboratory.booth.pm/items/3642935",
      "preview": "https://booth.pximg.net/c/620x620/2f131cbf-fd91-4652-9134-5aab11313537/i/3642935/26de75c9-bc76-47d4-a454-40271e131bc1_base_resized.jpg"
    },
  },
  {
    "flags": F.Streaming,
    "platforms": P.Windows | P.macOS,
    "ja": {
      "title": "Vフレット",
      "url": "https://nkjzm.jp/vfret",
      "preview": "https://storage.googleapis.com/notionstyles.appspot.com/users/c5t1u22ZbeWOeVwhaW77FFaFvcE3/4aa80f2c-5b23-4922-bc23-5d684c004b0b.png"
    },
    "en": {
      "title": "vfret",
    }
  },
  {
    "flags": F.Streaming,
    "platforms": P.Windows | P.macOS,
    "ja": {
      "title": "Avatar.Webcam",
      "url": "https://avatar.webcam",
      "preview": "https://static.wixstatic.com/media/ff33c7_d01533f0b5974914b06f54500d679523~mv2.jpg/v1/fill/w_1920,h_1080,al_c/ff33c7_d01533f0b5974914b06f54500d679523~mv2.jpg"
    },
  },
  {
    "flags": F.MotionCapture,
    "platforms": P.WindowsVR,
    "ja": {
      "title": "TRACKING WORLD",
      "url": "http://deatrathias.net/TW/",
    },
  },
  {
    "flags": F.MotionCapture,
    "platforms": P.iOS | P.macOS | P.Windows,
    "ja": {
      "title": "waidayo",
      "url": "https://booth.pm/ja/items/1779185",
      "preview": "https://booth.pximg.net/c/620x620/5569a658-a303-491f-8f61-55f498e7e5fa/i/1779185/66bdd2a4-eb0d-4c9e-ad85-ec291dc330ee_base_resized.jpg"
    },
  },
  {
    "flags": F.MotionCapture,
    "platforms": P.Windows,
    "ja": {
      "title": "ThreeDPoseTracker",
      "url": "https://github.com/digital-standard/ThreeDPoseTracker",
      "preview": "https://opengraph.githubassets.com/c0e4ed0bd9879ff948b4225c2246980a9a34a011217bfc500d1d27c272389cc5/digital-standard/ThreeDPoseTracker"
    },
  },
  {
    "flags": F.MotionCapture,
    "platforms": P.iOS,
    "ja": {
      "title": "TDPT",
      "url": "https://digital-standard.com/tdpt_lp/",
      "preview": "https://digital-standard.com/tdpt_lp/image/TDPT_Title.png"
    },
  },
  {
    "flags": F.MotionCapture,
    "platforms": P.Windows | P.WindowsVR,
    "ja": {
      "title": "EasyVirtualMotionCaptureForUnity",
      "url": "https://booth.pm/ja/items/1801535",
      "preview": "https://booth.pximg.net/c/620x620/e6ccaa4b-cb5f-43ce-9aec-a0e825c83ea8/i/1801535/b5f129a7-55ee-42aa-8c44-61d5c9291638_base_resized.jpg"
    },
  },
  {
    "flags": F.MotionCapture,
    "platforms": P.Windows | P.macOS,
    "ja": {
      "title": "Webcam Motion Capture",
      "url": "https://webcammotioncapture.info/ja/index.php",
      "preview": "https://webcammotioncapture.info/390_ja.png"
    },
  },
  {
    "flags": F.MotionCapture | F.FaceTracking,
    "platforms": P.Windows | P.macOS | P.iOS,
    "ja": {
      "title": "iFacialMocap",
      "url": "https://www.ifacialmocap.com/home/japanese/",
      "preview": "https://image.jimcdn.com/app/cms/image/transf/none/path/s478167c5170cc992/image/i56287ebf73cfafec/version/1578953166/image.gif"
    },
  },
  {
    "flags": F.MotionCapture | F.FaceTracking,
    "platforms": P.iOS,
    "ja": {
      "title": "FACEMOTION3D",
      "url": "https://apps.apple.com/jp/app/facemotion3d/id1507538005",
      "preview": "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/af/40/5f/af405f72-09ea-4573-18a3-3d2e7e9e77c7/AppIcon-0-0-1x_U007emarketing-0-7-0-sRGB-85-220.png/1200x630wa.png"
    },
  },
  {
    "flags": F.MotionCapture | F.FaceTracking,
    "platforms": P.Windows,
    "ja": {
      "title": "Kalidoface 3D",
      "url": "https://github.com/yeemachine/kalidoface-3d",
      "preview": "https://opengraph.githubassets.com/b8b427ade92a3c30f2d4312a8e773cbf1755af1c7e6079afdd0c8474c6c55286/yeemachine/kalidoface-3d"
    },
  },
  {
    "flags": F.MotionCapture,
    "platforms": P.iOS,
    "ja": {
      "title": "VIRTU: Avatar Camera",
      "url": "https://virtu.booth.pm/items/3684467",
      "description": "PC, [iOS](https://apps.apple.com/app/virtu-avatar-camera/id1597220065)",
      "preview": "https://booth.pximg.net/c/620x620/4dfc3db5-b971-402a-9ab0-da95f0a8ea80/i/3684467/6f8ac834-1539-4476-a52e-dce0cb62327f_base_resized.jpg"
    },
  },
  {
    "flags": F.MotionCapture | F.FaceTracking,
    "platforms": P.Windows | P.macOS | P.Linux,
    "ja": {
      "title": "VRigUnity",
      "url": "https://github.com/Kariaro/VRigUnity",
      "preview": "https://opengraph.githubassets.com/8d529f1f2fd01b43baafefa25731cfd853bfda0e6124fb9159c054180630a981/Kariaro/VRigUnity"
    },
  },
  {
    "flags": F.Animation,
    "platforms": P.Windows,
    "ja": {
      "title": "Ls ENGINE",
      "url": "https://lsengine.net/",
      "preview": "https://lsengine.net/wp-content/themes/lionblog/img/img_no.gif"
    },
  },
  {
    "flags": F.Animation,
    "ja": {
      "title": "AI4Animation",
      "url": "https://github.com/t-takasaka/AI4Animation/tree/master/AI4Animation/Assets/Demo/ARKit",
      "description": "Unityライブラリ"
    },
    "en": {
      "description": "Unity library"
    }
  },
  {
    "flags": F.Animation,
    "platforms": P.MetaQuest,
    "ja": {
      "title": "Dance Dance Maker!",
      "url": "https://booth.pm/ja/items/2216222",
      "preview": "https://booth.pximg.net/c/620x620/570549a5-5345-4e1d-8a77-d5d1179371be/i/2216222/2faa6e2f-9a9a-4f81-a5d5-672c1392f9be_base_resized.jpg"
    },
  },
  {
    "flags": F.Animation,
    "platforms": P.iOS | P.Android,
    "ja": {
      "title": "DanceDreamMV",
      "url": "https://maruapps.com/dancedreammv/",
      "preview": "https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/ja-jp?size=250x83&releaseDate=1610150400&h=6e6f3a33993bae4283e25f0a7d5de234"
    },
  },
  {
    "flags": F.Animation,
    "platforms": P.iOS | P.Android,
    "ja": {
      "title": "Doll Dancer",
      "url": "https://play.google.com/store/apps/details?id=com.personuo.dolldancer",
      "description": "[iOS](https://apps.apple.com/jp/app/doll-dancer-mmd-vroid-amv-app/id1394822854?platform=iphone), Android",
      "preview": "https://play-lh.googleusercontent.com/PmLAq-47mOHcj2AzTxciznePNEpkaToeDK7b0Ude7QZqyrLVZO3c0O9iR8zIVbn46sE"
    },
  },
  {
    "flags": F.Animation,
    "platforms": P.Windows,
    "ja": {
      "title": "Dan Sing Sing MV Maker",
      "url": "https://vtubershop.booth.pm/items/3366941",
      "preview": "https://booth.pximg.net/c/620x620/fa13e29a-76ec-4cee-9178-e5d7b94fc935/i/3366941/31c0d018-1593-4987-801f-b282bc08c4d5_base_resized.jpg"
    },
  },
  {
    "flags": F.Animation,
    "platforms": P.WindowsVR | P.MetaQuest,
    "ja": {
      "title": "PlayAniMaker",
      "url": "https://sites.google.com/view/playanimaker",
      "preview": "https://lh3.googleusercontent.com/JJL6RxVppw4CYUcUWwW2Ii0cNNzcoTg00B3v21n-Nzi0Opieb6wwAWcZzEriVN_JJ9dV-A=w16383"
    },
  },
  {
    "flags": F.Photography,
    "platforms": P.Windows,
    "ja": {
      "title": "VRMお人形遊びPC版",
      "url": "https://120byte.booth.pm/items/1654585",
      "description": "Windows",
      "preview": "https://booth.pximg.net/c/620x620/6dd2a4de-9111-46cb-b1c2-14645f3c8515/i/1654585/0fb7f8ce-b074-4168-afa7-01ca957caada_base_resized.jpg"
    },
    "en": {
      "title": "VRM Doll Play (PC)",
    }
  },
  {
    "flags": F.Photography,
    "platforms": P.WindowsVR,
    "ja": {
      "title": "VRMお人形遊び",
      "url": "https://120byte.booth.pm/items/1099618",
      "preview": "https://booth.pximg.net/c/620x620/6dd2a4de-9111-46cb-b1c2-14645f3c8515/i/1099618/fae15b8b-85f5-4d99-aa5c-4bdb9a143ace_base_resized.jpg"
    },
    "en": {
      "title": "VRM Doll Play",
    }
  },
  {
    "flags": F.Photography,
    "platforms": P.Android | P.iOS,
    "ja": {
      "title": "Vタビ",
      "url": "https://app.famitsu.com/gametitle/8356/",
      "preview": "https://app.famitsu.com/wp-content/uploads/2019/02/icon-53.jpg"
    },
    "en": {
      "title": "Vtabi",
    }
  },
  {
    "flags": F.Photography,
    "platforms": P.Android | P.iOS,
    "ja": {
      "title": "Vスタンプ",
      "url": "https://bnut.jp/vstamp",
      "preview": "https://cdn.myportfolio.com/949f323d-3e97-4517-aa26-6e8939a9869a/77ae04c4-58e0-48d6-952a-906fbb7c3f61_rwc_0x0x512x512x512.png?h=e3127ea457ea53cfd260429d95ea8ca6"
    },
    "en": {
      "title": "vstamp",
    }
  },
  {
    "flags": F.Photography,
    "platforms": P.Windows,
    "ja": {
      "title": "VRM Automatic Photographing",
      "url": "https://matsuvr.booth.pm/items/2223918",
      "preview": "https://booth.pximg.net/c/620x620/a449058b-d5f1-415c-9d05-388184ee905a/i/2223918/7ab7e585-3770-4244-9a1c-e142c4a2064f_base_resized.jpg"
    },
  },
  {
    "flags": F.Photography,
    "platforms": P.Windows,
    "ja": {
      "title": "VRMCardMaker",
      "url": "https://booth.pm/ja/items/1808860",
      "preview": "https://booth.pximg.net/c/620x620/55d0b3cd-8d44-43f0-8467-7e99fcc0d318/i/1808860/b11688b5-8d23-479d-bd90-a4dca2dce6dd_base_resized.jpg"
    },
  },
  {
    "flags": F.Photography,
    "platforms": P.iOS,
    "ja": {
      "title": "Pose Arch",
      "url": "https://apps.apple.com/jp/app/pose-arch/id1483326327",
      "preview": "https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/0b/7b/e9/0b7be99b-985c-5242-32b6-8f7527872e7c/AppIcon-1x_U007emarketing-0-7-0-85-220.png/1200x630wa.png"
    },
  },
  {
    "flags": F.Photography,
    "platforms": P.Android | P.iOS | P.Windows,
    "ja": {
      "title": "COCOPStudio",
      "url": "https://cocop.site/cocopstudio/",
      "preview": "https://cocop.site/wp-content/uploads/2020/12/COCOPManga-1-1024x749.png"
    },
  },
  {
    "flags": F.Photography,
    "platforms": P.Windows,
    "ja": {
      "title": "Emmv Studio",
      "url": "https://booth.pm/ja/items/2495794",
      "preview": "https://booth.pximg.net/c/620x620/766abe90-a3ce-40ec-829e-ee51f60a5e39/i/2495794/c3793df4-715f-4549-8ace-c8f31995b0de_base_resized.jpg"
    },
  },
  {
    "flags": F.Photography,
    "platforms": P.Windows,
    "ja": {
      "title": "PaSha!",
      "url": "https://ayato3d.booth.pm/items/2202577",
      "preview": "https://booth.pximg.net/c/620x620/e08e1533-b2cd-4f71-9ae1-005e15c17a4a/i/2202577/654c9859-4984-4e6c-9f86-7205e5b087eb_base_resized.jpg"
    },
  },
  {
    "flags": F.Photography,
    "platforms": P.Android | P.iOS,
    "ja": {
      "title": "PoseMixerAR",
      "url": "https://maruapps.com/posemixerar/",
      "preview": "https://maruapps.com/wp-content/uploads/2022/03/Group-133-1024x576.jpg"
    },
  },
  {
    "flags": F.Photography | F.VrmAnimation,
    "platforms": P.Windows | P.iOS | P.Android,
    "ja": {
      "title": "VRMポージング",
      "url": "https://store.steampowered.com/app/1895630/VRM_Posing_Desktop/",
      "description": "[Desktop](https://evelyngamedev.com/vrmposing-desktop/), [Mobile](https://evelyngamedev.com/vrmposing-mobile/)",
      "preview": "https://cdn.akamai.steamstatic.com/steam/apps/1895630/capsule_616x353.jpg?t=1705887197"
    },
    "en": {
      "title": "VRM Posing",
    }
  },
  {
    "flags": F.Metaverse | F.Vrm10,
    "platforms": P.WindowsVR | P.MetaQuest,
    "ja": {
      "title": "バーチャルキャスト",
      "url": "https://virtualcast.jp/",
      "description": " [Windows VR](https://store.steampowered.com/app/947890/VirtualCast/), [Oculus Quest](https://www.oculus.com/experiences/quest/4174249979259348/)",
      "preview": "https://virtualcast.jp/img/common/logo/virtual_cast_570_270_white.png"
    },
    "en": {
      "title": "VirtualCast",
      "description": "[Windows VR](https://store.steampowered.com/app/947890/VirtualCast/), [Oculus Quest](https://www.oculus.com/experiences/quest/4174249979259348/)",
    },
    "updated": new Date("2024-07-01"),
  },
  {
    "flags": F.Metaverse,
    "platforms": P.WindowsVR | P.Windows | P.macOS | P.iOS | P.Android,
    "ja": {
      "title": "cluster",
      "url": "https://cluster.mu/",
      "preview": "https://cluster.mu/ogp.png"
    },
    "updated": new Date("2023-01-03"),
  },
  {
    "flags": F.Metaverse,
    "platforms": P.WindowsVR,
    "ja": {
      "title": "Clarie",
      "url": "https://biscrat.booth.pm/items/1193414",
      "preview": "https://booth.pximg.net/c/620x620/4c6f3dce-4c86-4289-8482-91d8225965b3/i/1193414/61972bcb-0c63-4b25-aa67-08657b196568_base_resized.jpg"
    },
  },
  {
    "flags": F.Metaverse,
    "platforms": P.Windows | P.WindowsVR | P.macOS | P.Linux,
    "en": {
      "title": "Exokit",
      "url": "https://github.com/exokitxr/avatars",
      "preview": "https://opengraph.githubassets.com/4b718896d41bca688ee9b3fb6b3bfc8f5c67582cd2488b49b69119b9509f6eec/exokitxr/avatars"
    },
  },
  {
    "flags": F.Metaverse,
    "platforms": P.Windows | P.macOS,
    "ja": {
      "title": "Nifty Island",
      "url": "https://niftyisland.com/",
      "preview": "https://niftyisland.com/assets/pub/img/ni-preview.png"
    },
  },
  {
    "flags": F.Metaverse,
    "platforms": P.Windows | P.macOS | P.WindowsVR,
    "ja": {
      "title": "TECO",
      "url": "https://teco-vr.com/",
      "preview": "https://i.gyazo.com/165ad1a9602d7ef621bdf0b6bce0dc05.jpg"
    },
  },
  {
    "flags": F.Metaverse,
    "platforms": P.WindowsVR,
    "ja": {
      "title": "コラボル",
      "url": "https://brother-pv.booth.pm/items/2016717",
      "preview": "https://booth.pximg.net/c/620x620/60e6cd32-b667-4ece-843d-c1768dba069a/i/2016717/2b3c437a-619c-4757-b7dc-c6027338b9a8_base_resized.jpg"
    },
    "en": {
      "title": "Collaboll",
    }
  },
  {
    "flags": F.Metaverse,
    "platforms": P.WebBrowser,
    "en": {
      "title": "Webaverse",
      "url": "https://webaverse.com/",
    },
  },
  {
    "flags": F.Metaverse,
    "platforms": P.WindowsVR | P.macOS,
    "en": {
      "title": "ambr",
      "url": "https://ambr.co.jp/",
    }
  },
  {
    "flags": F.Metaverse,
    "platforms": P.WindowsVR,
    "ja": {
      "title": "Connect Chat",
      "url": "https://store.steampowered.com/app/1424930/Connect_Chat/",
      "preview": "https://cdn.akamai.steamstatic.com/steam/apps/1424930/capsule_616x353.jpg?t=1661962722"
    },
  },
  {
    "flags": F.Metaverse,
    "platforms": P.WebBrowser,
    "ja": {
      "title": "VZero",
      "url": "https://facevtuber.com/vzero/",
      "preview": "https://facevtuber.com/vzero/thumb.png"
    },
  },
  {
    "flags": F.Metaverse,
    "platforms": P.Windows | P.macOS | P.Linux,
    "ja": {
      "title": "Substrata",
      "url": "https://substrata.info/",
    },
  },
  {
    "flags": F.Metaverse,
    "platforms": P.WebBrowser | P.MetaQuest,
    "ja": {
      "title": "Hyperfy",
      "url": "https://hyperfy.io/",
      "preview": "https://hyperfy.io/logo-opengraph.png"
    },
  },
  {
    "flags": F.Metaverse | F.Vrm10,
    "platforms": P.WebBrowser,
    "ja": {
      "title": "Mona",
      "url": "https://monaverse.com",
    },
  },
  {
    "flags": F.Metaverse,
    "platforms": P.WebBrowser | P.WebXR,
    "ja": {
      "title": "oncyber",
      "url": "https://oncyber.io/",
      "preview": "https://cyber.mypinata.cloud/ipfs/QmVDt3ZNfkqZGduEW69eQvSsTBC331zh6aydg7NPpePxXr?filename=thumbnail_yvbk53_auozqa.png"
    },
  },
  {
    "flags": F.Game,
    "platforms": P.Windows,
    "ja": {
      "title": "Vワールド",
      "url": "https://naby.booth.pm/items/990663",
      "preview": "https://booth.pximg.net/c/620x620/45af98ee-8bb1-483d-92af-237a94be8384/i/990663/23408896-9e22-48f6-992d-0dd78f077b1a_base_resized.jpg"
    },
    "en": {
      "title": "VWorld",
    }
  },
  {
    "flags": F.Game,
    "ja": {
      "title": "BONFIRE~焚き火~",
      "url": "https://orenodinner.booth.pm/items/952450",
      "description": "Oculus Go",
      "preview": "https://booth.pximg.net/c/620x620/137be3c9-9bda-4d79-bff1-e2d7793b1000/i/952450/ca18032e-28da-409f-b1dd-8a0028da326a_base_resized.jpg"
    },
    "en": {
      "title": "BONFIRE",
    }
  },
  {
    "flags": F.Game,
    "platforms": P.WindowsVR,
    "ja": {
      "title": "つんつんVR",
      "url": "https://store.steampowered.com/app/867090/VR__TSUNTSUN_VR/",
      "preview": "https://cdn.akamai.steamstatic.com/steam/apps/867090/capsule_616x353.jpg?t=1656591973"
    },
    "en": {
      "title": "TSUN-TSUN VR",
    }
  },
  {
    "flags": F.Game,
    "platforms": P.WindowsVR,
    "ja": {
      "title": "コロコロシステム",
      "url": "https://www.mediaplex.co.jp/korokoro/",
      "preview": "https://www.mediaplex.co.jp/korokoro/img/og.jpg"
    },
    "en": {
      "title": "KOROKORO System",
    }
  },
  {
    "flags": F.Game,
    "platforms": P.WindowsVR,
    "ja": {
      "title": "パイロットクロス",
      "url": "https://n-mattun.booth.pm/",
      "preview": "https://booth.pximg.net/c/620x620/592c6d9f-3e4c-4946-bfeb-7977d7d981c4/i/1997616/6341cd53-2551-438d-baf1-2e986552ac0f_base_resized.jpg"
    },
    "en": {
      "title": "PilotXross",
    }
  },
  {
    "flags": F.Game,
    "platforms": P.WindowsVR,
    "ja": {
      "title": "プリミティア",
      "url": "https://store.steampowered.com/app/1745170/Primitier/",
      "preview": "https://cdn.akamai.steamstatic.com/steam/apps/1745170/capsule_616x353.jpg?t=1696669100"
    },
    "en": {
      "title": "Primitier",
    }
  },
  {
    "flags": F.Game,
    "platforms": P.WindowsVR,
    "ja": {
      "title": "Synth Riders",
      "url": "https://store.steampowered.com/app/885000/Synth_Riders/",
      "preview": "https://cdn.akamai.steamstatic.com/steam/apps/885000/capsule_616x353_alt_assets_7.jpg?t=1706205390"
    },
  },
  {
    "flags": F.Game,
    "platforms": P.WindowsVR,
    "ja": {
      "title": "SOUNDART",
      "url": "https://store.steampowered.com/app/1144460/SOUNDART/",
      "preview": "https://cdn.akamai.steamstatic.com/steam/apps/1144460/capsule_616x353.jpg?t=1692855639"
    },
  },
  {
    "flags": F.Game,
    "platforms": P.Windows,
    "ja": {
      "title": "VRAST!",
      "url": "https://rc-cobalt.booth.pm/items/1756359",
      "preview": "https://booth.pximg.net/c/620x620/a58e34b7-23b4-4d2b-bcff-65217538a985/i/1756359/73ea6dfa-6607-4ec5-9388-f100c6402b6a_base_resized.jpg"
    },
  },
  {
    "flags": F.Game,
    "platforms": P.WindowsVR | P.MetaQuest,
    "ja": {
      "title": "Legend of the Shieldbearers",
      "url": "https://www.spacepupstudio.com/lots",
      "preview": "https://lh4.googleusercontent.com/f776QxmrcZmhgIgx2OnAKnN-v_RFH_SgoGOP4fz5G7TxBe6aCUbBBeontNNp-ENz-CvskL3_ZSXf6l16TdtTSJ8=w16383"
    },
  },
  {
    "flags": F.Game,
    "platforms": P.Windows,
    "ja": {
      "title": "Craftopia",
      "url": "https://store.steampowered.com/app/1307550/Craftopia/",
      "preview": "https://cdn.akamai.steamstatic.com/steam/apps/1307550/capsule_616x353_alt_assets_2.jpg?t=1704778646"
    },
  },
  {
    "flags": F.Game,
    "platforms": P.WindowsVR | P.MetaQuest,
    "ja": {
      "title": "RESONARK X",
      "url": "https://store.steampowered.com/app/1366570/RESONARK_X/",
      "description": "Windows VR, [Oculus Quest](https://www.oculus.com/experiences/quest/3405379359561787/)",
      "preview": "https://cdn.akamai.steamstatic.com/steam/apps/1366570/capsule_616x353.jpg?t=1616769503"
    },
  },
  {
    "flags": F.Game,
    "platforms": P.Windows,
    "ja": {
      "title": "FantasySeed",
      "url": "https://booth.pm/ja/items/1293100",
      "preview": "https://booth.pximg.net/c/620x620/d5f8df31-7910-473a-b996-3810ac1fb8c8/i/1293100/5a73d6ac-fb34-44c8-9309-a1f77485d0eb_base_resized.jpg"
    },
  },
  {
    "flags": F.Game,
    "platforms": P.Windows,
    "ja": {
      "title": "Roduet",
      "url": "https://fujisunflower.booth.pm/items/2510498",
      "preview": "https://booth.pximg.net/c/620x620/cb0237fe-c742-4a81-a90a-6e3f920ad3de/i/2510498/7fad535a-5def-4351-b5f8-3b7f6de95577_base_resized.jpg"
    },
  },
  {
    "flags": F.Game,
    "platforms": P.Windows,
    "ja": {
      "title": "Cube Art World",
      "url": "https://simplestar-game.booth.pm/items/2622434",
      "preview": "https://booth.pximg.net/c/620x620/c7010761-002c-44fe-ae20-85f45c9e259d/i/2622434/e6127b64-5a2c-4644-9ec2-afdf27037117_base_resized.jpg"
    },
  },
  {
    "flags": F.Game,
    "platforms": P.Windows,
    "ja": {
      "title": "TouroReminiscence",
      "url": "https://booth.pm/ja/items/2349960",
      "preview": "https://booth.pximg.net/c/620x620/d3ce725c-dbbe-4c04-996a-31f0ecf037ac/i/2349960/5edfe757-1064-496a-a818-a26e7953d16e_base_resized.jpg"
    },
  },
  {
    "flags": F.Game,
    "platforms": P.Windows,
    "ja": {
      "title": "VRM Cyber walk",
      "url": "https://ktamayan.booth.pm/items/2790105",
      "preview": "https://booth.pximg.net/c/620x620/1a4e0889-d4a0-4259-9d32-ed14de1b80f3/i/2790105/086201e8-a3fe-4656-bf94-4622301aa102_base_resized.jpg"
    },
  },
  {
    "flags": F.Game,
    "platforms": P.Windows,
    "ja": {
      "title": "Virtual Home Run Derby",
      "url": "https://paldynojosh.booth.pm/items/1485218",
      "preview": "https://booth.pximg.net/c/620x620/6ea7ae69-246b-407c-a384-cebd4c3ba9dc/i/1485218/158cf87a-d9f9-491f-a0d8-63def5025c52_base_resized.jpg"
    },
  },
  {
    "flags": F.Game,
    "platforms": P.Windows,
    "ja": {
      "title": "フードデリバリーバトル",
      "url": "https://store.steampowered.com/app/1708710/Food_Delivery_Battle/",
      "preview": "https://cdn.akamai.steamstatic.com/steam/apps/1708710/capsule_616x353.jpg?t=1703579874"
    },
    "en": {
      "title": "Food Delivery Battle",
    }
  },
  {
    "flags": F.Game,
    "platforms": P.Windows,
    "ja": {
      "title": "古銭プッシャーフレンズ",
      "url": "https://store.steampowered.com/app/1722020/Old_Coin_Pusher_Friends/",
      "preview": "https://cdn.akamai.steamstatic.com/steam/apps/1722020/capsule_616x353.jpg?t=1703580020"
    },
    "en": {
      "title": "Old Coin Pusher Friends",
    }
  },
  {
    "flags": F.Game,
    "platforms": P.iOS,
    "ja": {
      "title": "AVATAVI",
      "url": "https://avatavi.com/jp/index.html",
      "preview": "https://avatavi.com/img/KV_main_S.jpg"
    },
  },
  {
    "flags": F.WebBrowser,
    "platforms": P.WebBrowser,
    "ja": {
      "title": "あけろ！爆裂駐車場！",
      "url": "https://unityroom.com/games/bakuretsu",
    },
    "en": {
      "title": "Bakuretsu Parking Lot",
    }
  },
  {
    "flags": F.WebBrowser,
    "platforms": P.WebBrowser,
    "ja": {
      "title": "スーパーエクストリームVRMサッカー",
      "url": "https://unityroom.com/games/hyperdimension-virtual-super-extreme-vrm-soccer",
    },
    "en": {
      "title": "Super Extreme VRM Soccer",
    }
  },
  {
    "flags": F.WebBrowser,
    "platforms": P.WebBrowser,
    "ja": {
      "title": "密ッションインポッシブル",
      "url": "https://unityroom.com/games/mitsussion",
    },
    "en": {
      "title": "Mission Impossible",
    }
  },
  {
    "flags": F.WebBrowser,
    "platforms": P.WebBrowser,
    "ja": {
      "title": "スーパーVRMブラザーズ3D",
      "url": "https://unityroom.com/games/aguroshoutest",
    },
    "en": {
      "title": "Super VRM Brothers 3D",
    }
  },
  {
    "flags": F.WebBrowser,
    "platforms": P.WebBrowser,
    "ja": {
      "title": "ペースアップ！",
      "url": "https://unityroom.com/games/paseup",
    },
    "en": {
      "title": "Pace Up !",
    }
  },
  {
    "flags": F.WebBrowser,
    "platforms": P.WebBrowser,
    "ja": {
      "title": "二輪VRM",
      "url": "https://unityroom.com/games/vrm_bike",
    },
    "en": {
      "title": "VRM Bike",
    }
  },
  {
    "flags": F.WebBrowser,
    "platforms": P.WebBrowser,
    "ja": {
      "title": "VRM三段跳び",
      "url": "https://unityroom.com/games/vrmtriplejump",
    },
    "en": {
      "title": "VRM Triple Jump",
    }
  },
  {
    "flags": F.WebBrowser,
    "platforms": P.WebBrowser,
    "ja": {
      "title": "(超)STEP PANEL MATCH",
      "url": "https://unityroom.com/games/step-panel-match",
    },
    "en": {
      "title": "Step Panel Match",
    }
  },
  {
    "flags": F.WebBrowser,
    "platforms": P.WebBrowser,
    "ja": {
      "title": "Vブレード",
      "url": "https://unityroom.com/games/vblade",
    },
    "en": {
      "title": "V Blade",
    }
  },
  {
    "flags": F.ImporterExporter,
    "ja": {
      "title": "Babylon VRM Viewer",
      "url": "https://github.com/virtual-cast/babylon-vrm-loader/",
      "description": "Babylon.js拡張 ",
      "preview": "https://repository-images.githubusercontent.com/185508879/04114e80-7638-11e9-88be-b3df71865dfc"
    },
    "en": {
      "description": "Babylon.js extension",
    }
  },
  {
    "flags": F.Viewer,
    "platforms": P.Android | P.iOS,
    "ja": {
      "title": "VPocket",
      "url": "https://booooooh.booth.pm/items/1033823",
      "preview": "https://booth.pximg.net/c/620x620/766abe90-a3ce-40ec-829e-ee51f60a5e39/i/1033823/edda207e-0f4c-47a8-8187-4750abdaa730_base_resized.jpg"
    },
  },
  {
    "flags": F.Viewer,
    "platforms": P.Windows,
    "ja": {
      "title": "VRMビュアー",
      "url": "https://w.atwiki.jp/beamman/",
      "preview": "https://img.atwiki.jp/beamman/attach/13/163/vrm.png"
    },
    "en": {
      "title": "VRMViewer",
    }
  },
  {
    "flags": F.Viewer,
    "platforms": P.macOS,
    "ja": {
      "title": "VRMQuickLook",
      "url": "https://github.com/magicien/VRMQuickLook",
      "preview": "https://opengraph.githubassets.com/37ddf4ff51b99b8eae86c5ea4cd088a0f7199a2825da84af9ce1905e039ffe6b/magicien/VRMQuickLook"
    },
  },
  {
    "flags": F.Viewer,
    "platforms": P.Windows,
    "ja": {
      "title": "VRM Live Viewer",
      "url": "https://booth.pm/ja/items/1783082",
      "preview": "https://booth.pximg.net/c/620x620/46161e9d-5b71-4b27-a134-1820ef0c2489/i/1783082/073e1432-0e59-485f-b615-94f5444b53af_base_resized.jpg"
    },
  },
  {
    "flags": F.ImporterExporter | F.Viewer,
    "ja": {
      "title": "UniWinApi Example project",
      "url": "https://github.com/kirurobo/UniWinApi",
      "description": "Unityライブラリ ",
      "preview": "https://repository-images.githubusercontent.com/144803660/866ab580-b060-11e9-9dcf-bd73939b211a"
    },
    "en": {
      "description": "Unity library",
    }
  },
  {
    "flags": F.ImporterExporter | F.Viewer,
    "ja": {
      "title": "KinectV2VRM",
      "url": "https://github.com/m2wasabi/KinectV2VRM",
      "description": "Unityライブラリ ",
      "preview": "https://opengraph.githubassets.com/a4ba1e60f92c02abb2ecd9461d7acbf81c09b2e8b13c38ce21383965ed80fa66/m2wasabi/KinectV2VRM"
    },
    "en": {
      "description": "Unity library",
    }
  },
  {
    "flags": F.Viewer,
    "platforms": P.WindowsVR,
    "ja": {
      "title": "MocuMocuVRM",
      "url": "http://www.vrai.jp/vr_mocuvrm.html",
      "description": "Windows VR, Looking Glass "
    },
  },
  {
    "flags": F.Viewer,
    "platforms": P.Windows,
    "ja": {
      "title": "VRM Display",
      "url": "https://akarimichi.github.io/vrm-display-releases/",
      "preview": "https://akarimichi.github.io/vrm-display-releases/assets/images/card-image.png"
    },
  },
  {
    "flags": F.Viewer,
    "platforms": P.Windows,
    "ja": {
      "title": "Desktop Magic Engine",
      "url": "https://store.steampowered.com/app/1096550/Desktop_Magic_Engine/",
      "preview": "https://cdn.akamai.steamstatic.com/steam/apps/1096550/capsule_616x353.jpg?t=1652877726"
    },
  },
  {
    "flags": F.UsingInternally,
    "platforms": P.iOS | P.Android,
    "ja": {
      "title": "カスタムキャスト",
      "url": "https://customcast.jp/",
    },
    "en": {
      "title": "Custom Cast",
    }
  },
  {
    "flags": F.UsingInternally,
    "platforms": P.iOS | P.Android,
    "ja": {
      "title": "REALITY",
      "url": "https://reality.wrightflyer.net/",
    },
  },
  {
    "flags": F.UsingInternally,
    "platforms": P.iOS,
    "ja": {
      "title": "パペ文字",
      "url": "https://www.puppemoji.com/",
    },
    "en": {
      "title": "Puppemoji",
    }
  },
  {
    "flags": F.UsingInternally,
    "platforms": P.Windows | P.macOS,
    "ja": {
      "title": "メイアライブオーダーメイド版",
      "url": "https://materializer.co/lab/mayalive",
      "preview": "https://materializer.co/lab/_media/logo-materializer-white.png"
    },
    "en": {
      "title": "Mayalive Order Made Version",
    }
  },
  {
    "flags": F.UsingInternally,
    "platforms": P.iOS | P.Android,
    "ja": {
      "title": "MakeAvatar",
      "url": "https://gugenka.jp/digital/make_avatar.php",
      "preview": "https://storage.googleapis.com/production-os-assets/assets/eca324fe-a374-42e9-b038-de9d4061038d"
    },
  },
  {
    "flags": F.ImporterExporter,
    "ja": {
      "title": "VRMLoaderUI",
      "url": "https://github.com/m2wasabi/VRMLoaderUI",
      "description": "Unityライブラリ ",
      "preview": "https://opengraph.githubassets.com/4fc4a503a4078dac4b9102f1c0f658a2d1ed514fbefbb6bdd429e91883a39ec8/m2wasabi/VRMLoaderUI"
    },
    "en": {
      "description": "Unity library",
    }
  },
  {
    "flags": F.Other,
    "platforms": P.Windows,
    "ja": {
      "title": "テアトル",
      "url": "https://teator.jp/",
      "preview": "https://teator.jp/assets/ogp.jpg"
    },
    "en": {
      "title": "TEATOR",
    }
  },
  {
    "flags": F.ImporterExporter,
    "ja": {
      "title": "NeoRoidHub for Unity",
      "url": "https://neoseast-japan.booth.pm/items/2562276",
      "description": "Unityエディタ拡張 ",
      "preview": "https://booth.pximg.net/c/620x620/8d4d3bf2-308b-4754-bde2-a197718377cd/i/2562276/f36dc2a1-808b-47a8-b6d5-0a19eb146026_base_resized.jpg"
    },
    "en": {
      "description": "Unity editor extension",
    }
  },
  {
    "flags": F.Other,
    "platforms": P.WindowsVR,
    "ja": {
      "title": "Virtual Presentation Space",
      "url": "https://eyesout.itch.io/virtual-presentation-space",
      "preview": "https://img.itch.zone/aW1nLzMwODM5NjkucG5n/original/xszbVE.png"
    },
  },
  {
    "flags": F.Other,
    "platforms": P.Windows,
    "ja": {
      "title": "VTuber Editor",
      "url": "https://store.steampowered.com/app/1454500/VTuber_Editor/",
      "preview": "https://cdn.akamai.steamstatic.com/steam/apps/1454500/capsule_616x353.jpg?t=1669859174"
    },
  },
  {
    "flags": F.Other,
    "platforms": P.Windows,
    "en": {
      "title": "TIFA",
      "url": "https://melonspeedruns.itch.io/tifa",
      "preview": "https://img.itch.zone/aW1nLzU0MDU1MjMuZ2lm/original/CgX5uJ.gif"
    }
  },
  {
    "flags": F.Other,
    "platforms": P.Windows | P.WindowsVR | P.Android | P.iOS,
    "ja": {
      "title": "STYLY",
      "url": "https://styly.cc/",
      "preview": "https://styly.cc/_next/static/media/White_Back_Ground_STYLY_Logo.25c7f144.png"
    },
  },
  {
    "flags": F.VrmHelper,
    "platforms": P.Windows,
    "ja": {
      "title": "[HANA] BlendShapeをコントロールするツール",
      "url": "https://kuniyan.booth.pm/items/2437978",
      "preview": "https://booth.pximg.net/c/620x620/5b7e23ca-da84-4832-8e36-f91e02616b3d/i/2437978/ea1d060b-176e-498b-85f5-afa47f47508a_base_resized.jpg"
    },
    "en": {
      "title": "[HANA_Tool_v2] Control BlendShapes Tool",
      "url": "https://kuniyan.booth.pm/items/2604269",
    }
  },
  {
    "flags": F.Other,
    "platforms": P.Windows,
    "ja": {
      "title": "Virtual Studio",
      "url": "https://natsunatsu.booth.pm/items/2956377",
      "preview": "https://booth.pximg.net/c/620x620/5d1ed011-ef46-45fd-809b-f64220617ae8/i/2956377/fcb0a8f7-bf0b-4c7b-ae45-241ecc43e5dd_base_resized.jpg"
    },
  },
  {
    "flags": F.VrmHelper,
    "platforms": P.Windows,
    "ja": {
      "title": "VRM表情設定するやつ",
      "url": "https://120byte.booth.pm/items/2152326",
      "preview": "https://booth.pximg.net/c/620x620/6dd2a4de-9111-46cb-b1c2-14645f3c8515/i/2152326/e734b8b5-169d-445e-8311-d2d7f5c71b28_base_resized.jpg"
    },
    "en": {
      "title": "VRM facial setting",
    }
  },
  {
    "flags": F.VrmHelper,
    "platforms": P.Windows,
    "ja": {
      "title": "VRMテクスチャ差し替えるやつ",
      "url": "https://120byte.booth.pm/items/2177538",
      "preview": "https://booth.pximg.net/c/620x620/6dd2a4de-9111-46cb-b1c2-14645f3c8515/i/2177538/00364192-65e2-462a-88e4-402be5280373_base_resized.jpg"
    },
    "en": {
      "title": "VRM texture replace",
    }
  },
  {
    "flags": F.VrmHelper,
    "platforms": P.Windows,
    "ja": {
      "title": "アイテムショップ",
      "url": "https://suzuki-cecil.booth.pm/items/3250368",
      "preview": "https://booth.pximg.net/c/620x620/d8fc025c-b520-429f-a51b-71342613591f/i/3250368/d65f636e-d3d0-4e5e-9364-cd82340c2110_base_resized.jpg"
    },
    "en": {
      "title": "Item Shop",
    }
  },
  {
    "flags": F.Other,
    "platforms": P.Windows,
    "en": {
      "title": "meebits-blender-utils",
      "url": "https://github.com/MeebitsDAO/meebits-blender-utils",
      "preview": "https://opengraph.githubassets.com/9b8000c01cce334bfe720389fcd96a2fb24fefd50e3b2b468a9fff496565007f/MeebitsDAO/meebits-blender-utils"
    }
  },
  {
    "flags": F.Other,
    "platforms": P.Windows,
    "en": {
      "title": "The Meebits - Larva Labs",
      "url": "https://meebits.larvalabs.com/",
      "preview": "https://meebits.app/public/images/homepage/group.jpg"
    }
  },
  {
    "flags": F.Other,
    "platforms": P.Windows,
    "en": {
      "title": "SimpleURPToonLitOutlineExample",
      "url": "https://github.com/simplestargame/SimpleURPToonLitOutlineExample",
      "preview": "https://repository-images.githubusercontent.com/452284076/92f08df6-d1d1-4b34-953e-def02f7d561f"
    }
  },
  {
    "flags": F.Other,
    "platforms": P.Windows,
    "en": {
      "title": "Kalidokit",
      "url": "https://github.com/yeemachine/kalidokit",
      "preview": "https://opengraph.githubassets.com/a08f1a61d9a0e14348a6f01ec45a6b48bc7608671e4d1133a566e842c02145bc/yeemachine/kalidokit"
    }
  },
  {
    "flags": F.ImporterExporter,
    "en": {
      "title": "Wicked Engine",
      "url": "https://github.com/turanszkij/WickedEngine",
      "description": "Windows, Linux, Xbox Series, PlayStation 5",
      "preview": "https://repository-images.githubusercontent.com/37770961/c7a169f3-f000-4351-aa94-78cf1d79c7c4"
    }
  },
  //
  {
    "flags": F.CharacterPlatform,
    "ja": {
      "title": "DMM VR CONNECT",
      "url": "https://connect.vrlab.dmm.com/"
    },
  },
  {
    "flags": F.Game,
    "ja": {
      "title": "BOW MAN",
      "url": "https://bowman.vrlab.dmm.com/ja/",
      "description": "Windows VR"
    },
  },
  {
    "flags": F.Streaming,
    "ja": {
      "title": "2DR",
      "url": "https://2dr.info/",
      "description": "iOS, Android"
    },
  },
  {
    "flags": F.Photography,
    "ja": {
      "title": "Vismuth",
      "url": "https://vismuth.com/",
      "description": "Android, iOS"
    },
  },
  {
    "flags": F.Game,
    "ja": {
      "title": "SEIYA",
      "url": "https://wandv.jp/seiya/",
      "description": "Windows VR"
    },
  },
  {
    "flags": F.Game,
    "ja": {
      "title": "ラクキン",
      "url": "https://rakugaki-kingdom.com/",
      "description": "iOS, Android"
    },
    "en": {
      "title": "Rakugaki Kingdom",
    }
  },
  {
    "flags": F.Viewer,
    "ja": {
      "title": "VRM Viewer",
      "url": "https://vrm-viewer.yukimochi.io/",
      "description": "Webブラウザ "
    },
    "en": {
      "description": "Web browser"
    }
  },
  {
    "flags": F.Viewer,
    "ja": {
      "title": "TSO AR Viewer",
      "url": "https://seed.online/static/guide-arviewer",
      "description": "Android, iOS "
    },
  },
  {
    "flags": F.UsingInternally,
    "platforms": P.Windows | P.iOS | P.Android,
    "ja": {
      "title": "Vカツ",
      "url": "http://vkatsu.jp/",
    },
    "en": {
      "title": "Vkatsu",
    }
  },
  {
    "flags": F.Other,
    "ja": {
      "title": "ミロックプラス",
      "url": "https://www.miloq-plus.com/",
      "description": "Android, iOS "
    },
    "en": {
      "title": "miloq plus",
    }
  },
  {
    "flags": F.Metaverse,
    "platforms": P.Windows | P.macOS | P.iOS | P.Android,
    "ja": {
      "title": "dverso.io",
      "url": "https://dverso.io",
      "preview": "https://assets.dverso.io/logo.png"
    },
  },
  {
    "flags": F.CharacterCreation,
    "platforms": P.WebBrowser,
    "ja": {
      "title": "myVIPE",
      "url": "https://vipe.io/myvipe",
      "preview": "https://white-legal-elk-728.mypinata.cloud/ipfs/QmUwjmEeApqGVeSza8bV8zE91s3W82X7MpV7eQqRP7DT5w/myVIPE.jpg"
    },
  },
  // 2024-05-23
  {
    "flags": F.Other,
    "ja": {
      "title": "ACUAH",
      "description": `ユーザーカスタマイズ可能なキャラクターアシスタントアプリです。
[Android](https://play.google.com/store/apps/details?id=com.csunitetech.acuah)
[iOS](https://apps.apple.com/jp/app/acuah/id6477607472)
`,
      'preview': 'https://acuah.info/ACUAH_570x270.png',
    },
    "updated": new Date("2024-05-23"),
  },
  {
    "flags": F.Other,
    "ja": {
      "title": "BoxBallBuilder",
      "url": "https://fujisunflower.booth.pm/items/4083428",
      "description": "簡単に単純な3Dデータ作成が出来るアプリです。",
    },
    "updated": new Date("2024-05-23"),
  },
  {
    "flags": F.Other,
    "ja": {
      "title": "MaiMirror",
      "url": "https://fujisunflower.booth.pm/items/3752411",
      "description": "配信用のアバター表示アプリです。",
    },
    "updated": new Date("2024-05-23"),
  },
  {
    "flags": F.VrmHelper,
    "platforms": P.Windows,
    "ja": {
      "title": "VRMMaterialEditor",
      "url": "https://fujisunflower.fanbox.cc/posts/7820024",
      "description": "VRM 0系の詳細なマテリアル編集を行うアプリです。",
    },
    "updated": new Date("2024-05-23"),
  },
  {
    "flags": F.VrmHelper | F.Vrm10,
    "platforms": P.Windows,
    "ja": {
      "title": "VRMRemaker",
      "url": "https://fujisunflower.fanbox.cc/posts/7313957",
      "description": "VRM0系とVRM1系の間で再編集を行うアプリ『VRMRemaker』です。",
    },
    "updated": new Date("2024-05-23"),
  },
  {
    "flags": F.VrmHelper,
    "platforms": P.Windows,
    "ja": {
      "title": "VRMDressRoom",
      "url": "https://fujisunflower.fanbox.cc/posts/5550686",
      "description": "素体用のVRM 0系を衣装用のVRM 0系でお着替えするアプリです。",
    },
    "updated": new Date("2024-05-23"),
  },
  {
    'flags': F.VrmAnimation,
    'ja': {
      'title': 'AnimationClipToVrmaSample',
      'url': 'https://github.com/malaybaku/AnimationClipToVrmaSample',
      'description': 'Sample Project to Convert AnimationClip to VRM Animation (.vrma) in Unity',
      'preview': 'https://opengraph.githubassets.com/43a572fe49915f8f0b5e7afa6acb258e6f752e3f2ee82ba7da9cd28e23416e7c/malaybaku/AnimationClipToVrmaSample',
    },
    "updated": new Date("2024-07-04"),
  },
  {
    'flags': F.VrmHelper | F.VrmAnimation,
    'platforms': P.WebBrowser,
    'ja': {
      'title': 'VRM spring bone adjustment tool',
      'url': 'https://napharmonia.com/vrmtool/',
      'preview': 'https://napharmonia.com/wp-content/uploads/2023/03/VRMツール.jpg',
    },
    "updated": new Date("2024-07-04"),
  },
  {
    'flags': F.VrmAnimation,
    'platforms': P.WebBrowser,
    'ja': {
      'title': 'VRMA, BVHをアップロードして VRMを動かすやつ',
      'url': 'https://tfuru.github.io/vrma-loader-sample/',
    },
    "updated": new Date("2024-07-04"),
  },
];
