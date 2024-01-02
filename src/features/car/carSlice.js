import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    currentCar: {
        version: {
            
        },
        color: {

        },
        rims: {

        },
        saddlery: {

        },
        equipment: [

        ],
        accessory: [
            
        ],
        totalPrice: 0
    },
    data: {
        versions: [
            {
                name: "Pure",
                price: 54700,
                img: {
                    selection: "assets/images/configurateur/modele/selection/pure.png",
                    white: {
                        standard: [
                            "assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (1).jpg",
                            "assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (3).jpg",
                            "assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (2).jpg",
                            "assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_standard (4).jpg",
                        ],
                        serac: [
                            "assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (1).jpg",
                            "assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (3).jpg",
                            "assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (2).jpg",
                            "assets/images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (4).jpg",
                        ]
                    },
                    blue: {
                        standard: [
                            "assets/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (1).jpg",
                            "assets/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (3).jpg",
                            "assets/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (2).jpg",
                            "assets/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_standard (4).jpg",
                        ],
                        serac: [
                            "assets/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (1).jpg",
                            "assets/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (3).jpg",
                            "assets/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (2).jpg",
                            "assets/images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (4).jpg",
                        ]
                    },
                    black: {
                        standard: [
                            "assets/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (1).jpg",
                            "assets/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (3).jpg",
                            "assets/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (2).jpg",
                            "assets/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_standard (4).jpg",
                        ],
                        serac: [
                            "assets/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (1).jpg",
                            "assets/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (3).jpg",
                            "assets/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (2).jpg",
                            "assets/images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (4).jpg",
                        ]
                    }
                }
            },
            {
                name: "Legende",
                price: 58500,
                img: {
                    selection: "assets/images/configurateur/modele/selection/legende.png",
                    white: {
                        legende: [
                            "assets/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-4.jpg",
                            "assets/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-3.jpg",
                            "assets/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-1.jpg",
                            "assets/images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-2.jpg",
                        ]
                    },
                    blue: {
                        legende: [
                            "assets/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-4.jpg",
                            "assets/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-3.jpg",
                            "assets/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-1.jpg",
                            "assets/images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-2.jpg",
                        ]
                    },
                    black: {
                        legende: [
                            "assets/images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-4.jpg",
                            "assets/images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-3.jpg",
                            "assets/images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-1.jpg",
                            "assets/images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-2.jpg",
                        ]
                    }
                }
                
                
            },
        ],
        colors: [
            {
                id: "white",
                name: "Peinture opaque Blanc Glacier",
                price: 0,
                img: "assets/images/configurateur/couleurs/selection/blanc.jpg",
            },
            {
                id:"blue",
                name: "Teinte spéciale Bleu Alpine",
                price: 1800,
                img: "assets/images/configurateur/couleurs/selection/bleu.jpg",
            },
            {
                id:"black",
                name: "Teinte métallisée Noir Profond",
                price: 840,
                img: "assets/images/configurateur/couleurs/selection/noir.jpg",
            },
        ],
        rims: [
            {
                id: "standard",
                name:"Standard",
                price: 0,
                version: "Pure",
                img: {
                    selection: "assets/images/configurateur/jantes/selection/jante-standard.jpg",
                    white: "assets/images/configurateur/jantes/vues/couleur-blanc_jante-standard (2).jpg",
                    blue: "assets/images/configurateur/jantes/vues/couleur-bleu_jante-standard (3).jpg",
                    black: "assets/images/configurateur/jantes/vues/couleur-noir_jante-standard (1).jpg"
                },
            },
            {
                id: "serac",
                name:"Serac",
                price: 1000,
                version: "Pure",
                img: {
                    selection: "assets/images/configurateur/jantes/selection/jante-serac.jpg",
                    white: "assets/images/configurateur/jantes/vues/couleur-blanc_jante-serac (2).jpg",
                    blue: "assets/images/configurateur/jantes/vues/couleur-bleu_jante-serac (3).jpg",
                    black: "assets/images/configurateur/jantes/vues/couleur-noir_jante-serac (1).jpg"
                },
            },
            {
                id: "legende",
                name:"Legende",
                price: 0,
                version: "Legende",
                img: {
                    selection: "assets/images/configurateur/jantes/selection/jante-legende.jpg",
                    white: "assets/images/configurateur/jantes/vues/couleur-blanc_jante-legende (2).jpg",
                    blue: "assets/images/configurateur/jantes/vues/couleur-bleu_jante-legende (3).jpg",
                    black: "assets/images/configurateur/jantes/vues/couleur-noir_jante-legende (1).jpg"
                },
            },
        ],
        saddlery: [
            {
                name: "Sièges baquets en cuir noir et Dinamica",
                price: 0,
                version: "Pure",
                img: {
                    selection: "assets/images/configurateur/interieurs/selection/cuir-noir_dinamica.jpg",
                    carousel: [
                        "assets/images/configurateur/interieurs/vues/cuir-noir_dinamica-1.jpg",
                        "assets/images/configurateur/interieurs/vues/cuir-noir_dinamica-2.jpg",
                        "assets/images/configurateur/interieurs/vues/cuir-noir_dinamica-3.jpg",
                    ]
                }
            },
            {
                name: "Sièges confort en cuir noir perforé",
                price: 800,
                version: "Pure",
                img: {
                    selection: "assets/images/configurateur/interieurs/selection/cuir-noir.jpg",
                    carousel: [
                        "assets/images/configurateur/interieurs/vues/cuir-noir-1.jpg",
                        "assets/images/configurateur/interieurs/vues/cuir-noir-2.jpg",
                        "assets/images/configurateur/interieurs/vues/cuir-noir-3.jpg",
                    ]
                }
            },
            {
                name: "Sièges Confort en cuir noir",
                price: 0,
                version: "Legende",
                img: {
                    selection: "assets/images/configurateur/interieurs/selection/cuir-noir_perfore.jpg",
                    carousel: [
                        "assets/images/configurateur/interieurs/vues/cuir-noir_perfore-1.jpg",
                        "assets/images/configurateur/interieurs/vues/cuir-noir_perfore-2.jpg",
                        "assets/images/configurateur/interieurs/vues/cuir-noir_perfore-3.jpg",
                    ]
                }
            },
            {
                name: "Sièges Confort en cuir brun",
                price: 800,
                version: "Legende",
                img: {
                    selection: "assets/images/configurateur/interieurs/selection/cuir-brun.jpg",
                    carousel: [
                        "assets/images/configurateur/interieurs/vues/cuir-brun-1.jpg",
                        "assets/images/configurateur/interieurs/vues/cuir-brun-2.jpg",
                        "assets/images/configurateur/interieurs/vues/cuir-brun-3.jpg",
                    ]
                }
            },
        ],
        equipment: [
            { 
                id: "int-perso",
                name: "Perso. intérieure",
                img: "assets/images/configurateur/equipements/selection/perso-int.jpg",
                items : [
                    {
                        name: "Pédalier en aluminium",
                        price: 120,
                        default: false,
                        required: false,
                        img: "assets/images/configurateur/equipements/categories/personnalisation interieure/pedal-alu.jpg"
                    },
                    {
                        name: "Harmonie carbone mat",
                        price: 0,
                        default: false,
                        required: false,
                        img: "assets/images/configurateur/equipements/categories/personnalisation interieure/pack-carbone.jpg"
                    },
                    {
                        name: "Logo au centre du volant en Bleu Alpine",
                        price: 84,
                        default: false,
                        required: false,
                        img: "assets/images/configurateur/equipements/categories/personnalisation interieure/logo-volant.jpg"
                    },
                    {
                        name: "Sièges chauffants",
                        price: 400,
                        default: false,
                        required: false,
                        img: "assets/images/configurateur/equipements/categories/personnalisation interieure/siege-chauffant.jpg"
                    }
                ]
            },
            {
                id: "ext-perso",
                name: "Perso. extérieure",
                img: "assets/images/configurateur/equipements/selection/perso-ext.jpg",
                items : [
                    {
                        name: "Etriers de frein couleur Gris Anthracite",
                        price: 0,
                        default: true,
                        required: true,
                        category: "freins",
                        img: "assets/images/configurateur/equipements/categories/personnalisation exterieure/etrier-gris.jpg"
                    },
                    {
                        name: "Etriers de frein couleur Bleu Alpine",
                        price: 384,
                        default: false,
                        required: true,
                        category: "freins",
                        img: "assets/images/configurateur/equipements/categories/personnalisation exterieure/etrier-bleu.jpg"
                    },
                    {
                        name: "Logo Alpine sur les ailes avant",
                        price: 120,
                        default: false,
                        required: false,
                        img: "assets/images/configurateur/equipements/categories/personnalisation exterieure/logo-alpine.jpg"
                    }
                ]
            },
            {
                id: "security",
                name: "Sécurité",
                img: "assets/images/configurateur/equipements/selection/securite.jpg",
                items : [
                    {
                        name: "Système de freinage Haute-Perf 320mm",
                        price: 1000,
                        default: false,
                        required: false,
                        img: "assets/images/configurateur/equipements/categories/securite/freinage-haute-perf.jpg"
                    },
                    {
                        name: "Assistance au freinage d'urgence",
                        price: 0,
                        default: true,
                        required: true,
                        img: "assets/images/configurateur/equipements/categories/securite/aide-freinage-durgence.jpg"
                    },
                    {
                        name: "Airbags frontaux conducteur et passager",
                        price: 0,
                        default: true,
                        required: true,
                        img: "assets/images/configurateur/equipements/categories/securite/airbag.jpg"
                    }
                ]
            },
            {
                id: "conduite",
                name: "Conduite",
                img: "assets/images/configurateur/equipements/selection/conduite.jpg",
                items : [
                    {
                        name: "Aide au stationnement AR",
                        price: 420,
                        default: false,
                        required: false,
                        category: "aideStationnement",
                        img: "assets/images/configurateur/equipements/categories/conduite/aide-stationnement-ar.jpg"
                    },
                    {
                        name: "Aide au stationnement AV et AR",
                        price: 750,
                        default: false,
                        required: false,
                        category: "aideStationnement",
                        img: "assets/images/configurateur/equipements/categories/conduite/aide-stationnement-av-ar.jpg"
                    },
                    {
                        name: "Aide au stationnement AV AR et caméra de recul",
                        price: 1200,
                        default: false,
                        required: false,
                        category: "aideStationnement",
                        img: "assets/images/configurateur/equipements/categories/conduite/camera-recul.jpg"
                    },
                    {
                        name: "Echappement Sport actif",
                        price: 1500,
                        default: false,
                        required: false,
                        img: "assets/images/configurateur/equipements/categories/conduite/echappement-sport.jpg"
                    }
                ]
            },
            {
                id: "confort",
                name: "Confort",
                img: "assets/images/configurateur/equipements/selection/confort.jpg",
                items : [
                    {
                        name: "Retroviseur intérieur électrochrome",
                        price: 0,
                        default: true,
                        required: true,
                        img: "assets/images/configurateur/equipements/categories/confort/retro-int-electrochrome.jpg"
                    },
                    {
                        name: "Rétroviseurs ext. chauf. rabattables élec.",
                        price: 504,
                        default: false,
                        required: false,
                        img: "assets/images/configurateur/equipements/categories/confort/retro-ext-chaffant.jpg"
                    },
                    {
                        name: "Pack de rangement",
                        price: 504,
                        default: false,
                        required: false,
                        img: "assets/images/configurateur/equipements/categories/confort/pack-rangement.jpg"
                    },
                    {
                        name: "Régulateur / limiteur de vitesse",
                        price: 0,
                        default: true,
                        required: true,
                        img: "assets/images/configurateur/equipements/categories/confort/regul-limit-vitesse.jpg"
                    }
                ]
            },
            {
                id: "media",
                name: "Media et navigation",
                img: "/assets/images/configurateur/equipements/selection/media-nav.jpg",
                items : [
                    {
                        name: "Alpine Télémétrics",
                        price: 204,
                        default: false,
                        required: false,
                        img: "assets/images/configurateur/equipements/categories/media et navigation/alpine-metrics.jpg"
                    },
                    {
                        name: "Système Audio Focal",
                        price: 600,
                        default: false,
                        required: false,
                        category: "audio",
                        img: "assets/images/configurateur/equipements/categories/media et navigation/audio-focal.jpg"
                    },
                    {
                        name: "Système Audio Focal Premium",
                        price: 1200,
                        default: false,
                        required: false,
                        category: "audio",
                        img: "assets/images/configurateur/equipements/categories/media et navigation/audio-premium.jpg"
                    },
                    {
                        name: "Système Audio standard",
                        price: 0,
                        default: true,
                        required: true,
                        category: "audio",
                        img: "assets/images/configurateur/equipements/categories/media et navigation/audio-standard.jpg"
                    }
                ]
            },
            {
                id: "design",
                name: "Design",
                img: "assets/images/configurateur/equipements/selection/design.jpg",
                items : [
                    {
                        name: "Pack héritage",
                        price: 180,
                        default: false,
                        img: "assets/images/configurateur/equipements/categories/design/pack-heritage.jpg"
                    },
                    {
                        name: "Repose-pieds passager en aluminium",
                        price: 96,
                        default: false,
                        img: "assets/images/configurateur/equipements/categories/design/repose-pied-alu.jpg"
                    }
                ]
            }
        ],
        accessory: [
            {
                id: "transport",
                name: "Transport et protection",
                items: [
                    {
                        name: "Extincteur 1kg avec manomètre",
                        price: 22,
                        img: "assets/images/configurateur/accessoires/transport et protection/extincteur.jpg"
                    },
                    {
                        name: "Chaine à neige Premium Grip",
                        price: 336,
                        img: "assets/images/configurateur/accessoires/transport et protection/chaaine-neige.jpg"
                    },
                    {
                        name: "Alarme",
                        price: 543,
                        img: "assets/images/configurateur/accessoires/transport et protection/alarme.jpg"
                    },
                    {
                        name: "Protection Prise OBD",
                        price: 99,
                        img: "assets/images/configurateur/accessoires/transport et protection/protection-obd.jpg"
                    },
                    {
                        name: "Kit de sécurité",
                        price: 20,
                        img: "assets/images/configurateur/accessoires/transport et protection/kit-securite.jpg"
                    },
                    {
                        name: "Fixation extincteur",
                        price: 72,
                        img: "assets/images/configurateur/accessoires/transport et protection/fixation-extincteur.jpg"
                    },
                ]
            },
            {
                id: "multimedia",
                name: "Multimédia",
                items: [
                    {
                        name: "Support caméra sport",
                        price: 89,
                        img: "assets/images/configurateur/accessoires/multimedia/support-camera.jpg"
                    },
                    {
                        name: "Support smartphone magnétique - Fixation sur tableau de bord",
                        price: 21,
                        img: "assets/images/configurateur/accessoires/multimedia/support-smartphone.jpg"
                    }
                ]
            },
            {
                id: "interieur",
                name: "Intérieur",
                items: [
                    {
                        name: "Tapis de coffre",
                        price: 83,
                        img: "assets/images/configurateur/accessoires/interieur/tapis-coffre.jpg"
                    },
                    {
                        name: "Filet de rangement - Horizontal",
                        price: 59,
                        img: "assets/images/configurateur/accessoires/interieur/filet-rangement.jpg"
                    }
                ]
            },
            {
                id: "garage",
                name: "Matériel de garage",
                items: [
                    {
                        name: "Chargeur batterie",
                        price: 240,
                        img: "assets/images/configurateur/accessoires/garage/chargeur-batterie.jpg"
                    },
                    {
                        name: "Kit Outils Alpine",
                        price: 398,
                        img: "assets/images/configurateur/accessoires/garage/kit-outils.jpg"
                    }
                ]
            },
            {
                id: "exterieur",
                name: "Extérieur",
                items: [
                    {
                        name: "Cabochons Alpine - Métalisés",
                        price: 24,
                        img: "assets/images/configurateur/accessoires/exterieur/cabochons-metal.jpg"
                    },
                    {
                        name: "Housse de protection Alpine",
                        price: 216,
                        img: "assets/images/configurateur/accessoires/exterieur/housse.jpg"
                    },
                    {
                        name: "Antivols pour jante - Noirs",
                        price: 51,
                        img: "assets/images/configurateur/accessoires/exterieur/antivol-jantes.jpg"
                    },
                ]
            }
        ]
    },
    currentSection: "",
    currentImg: [],
};

export const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {
        loadVersion: (state, action) => {
            state.currentCar.version = action.payload;
        },
        loadColor: (state, action) => {
            state.currentCar.color = action.payload;
        },
        loadRims: (state, action) => {
            state.currentCar.rims = action.payload;
        },
        loadSaddlery: (state, action) => {
            state.currentCar.saddlery = action.payload;
        },
        loadEquipment: (state, action) => {
            if (!(state.currentCar.equipment.find((item) => item.name === action.payload.name))){
                state.currentCar.equipment.push(action.payload);
            }
        },
        removeEquipment: (state, action) => {
            if (state.currentCar.equipment.find((item) => item.name === action.payload.name)){
                state.currentCar.equipment = state.currentCar.equipment.filter((item) => item.name !== action.payload.name);
            }
        },
        loadAccessory: (state, action) => {
            if (!(state.currentCar.accessory.find((item) => item.name === action.payload.name))){
                state.currentCar.accessory.push(action.payload);
            }
        },
        removeAccessory: (state, action) => {
            if (state.currentCar.accessory.find((item) => item.name === action.payload.name)){
                state.currentCar.accessory = state.currentCar.accessory.filter((item) => item.name !== action.payload.name);
            }
        },
        loadImg: (state, action) => {
            state.currentImg = action.payload;
        },
        loadTotalPrice: (state, action) => {
            state.currentCar.totalPrice = action.payload;
        },
        loadSection: (state, action) => {
            state.currentSection = action.payload;
        },
    }
});

export default carSlice.reducer

export const { loadVersion, loadColor, loadRims, loadSaddlery, loadEquipment, removeEquipment, loadAccessory, removeAccessory, loadImg, loadTotalPrice, loadSection } = carSlice.actions