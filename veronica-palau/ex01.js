/* 
Projeto Matrix - Formação OutSystems - 2021.1

Fase final da etapa de nivelamento.

Mentor: Jonatan Machado

Questão:
Dado um array contendo somente números,
retorne um outro array contendo apenas os valores que forem maiores que 50.
*/

//Não alterar nenhum valor do campo entrada.
const entrada = [
  321,
  456,
  387,
  279,
  850,
  560,
  311,
  842,
  88,
  685,
  132,
  101,
  415,
  680,
  927,
  104,
  53,
  999,
  449,
  472,
  705,
  997,
  72,
  864,
  882,
  854,
  845,
  651,
  921,
  345,
  76,
  803,
  510,
  147,
  429,
  976,
  894,
  656,
  200,
  668,
  251,
  745,
  723,
  402,
  92,
  129,
  771,
  272,
  337,
  761,
  662,
  473,
  43,
  720,
  424,
  26,
  393,
  116,
  497,
  542,
  370,
  658,
  428,
  633,
  384,
  20,
  476,
  71,
  522,
  502,
  929,
  682,
  417,
  84,
  316,
  90,
  630,
  183,
  506,
  463,
  516,
  358,
  834,
  318,
  702,
  495,
  231,
  128,
  334,
  908,
  763,
  171,
  208,
  320,
  552,
  823,
  687,
  511,
  554,
  470,
  432,
  122,
  743,
  291,
  996,
  166,
  653,
  529,
  688,
  505,
  141,
  419,
  5,
  556,
  717,
  832,
  247,
  377,
  22,
  299,
  211,
  344,
  612,
  413,
  897,
  756,
  382,
  935,
  748,
  620,
  1000,
  722,
  197,
  696,
  159,
  800,
  652,
  418,
  496,
  354,
  981,
  346,
  65,
  315,
  549,
  427,
  480,
  886,
  611,
  742,
  66,
  193,
  125,
  325,
  362,
  186,
  399,
  538,
  994,
  394,
  647,
  27,
  993,
  703,
  198,
  450,
  353,
  913,
  227,
  97,
  99,
  570,
  672,
  974,
  488,
  593,
  677,
  719,
  294,
  181,
  793,
  48,
  777,
  784,
  923,
  944,
  464,
  650,
  491,
  824,
  9,
  934,
  111,
  271,
  131,
  890,
  63,
  112,
  121,
  991,
  931,
  969,
  93,
  273,
  853,
  391,
  462,
  856,
  521,
  643,
  948,
  594,
  471,
  86,
  525,
  482,
  250,
  210,
  178,
  517,
  915,
  518,
  973,
  120,
  499,
  453,
  678,
  202,
  381,
  939,
  751,
  260,
  730,
  329,
  161,
  750,
  36,
  585,
  218,
  956,
  609,
  189,
  331,
  810,
  591,
  957,
  841,
  124,
  811,
  434,
  804,
  862,
  755,
  206,
  252,
  284,
  911,
  692,
  919,
  50,
  794,
  295,
  684,
  520,
  676,
  606,
  156,
  253,
  608,
  383,
  986,
  729,
  190,
  918,
  907,
  954,
  664,
  861,
  82,
  772,
  740,
  408,
  385,
  760,
  35,
  39,
  401,
  938,
  825,
  940,
  474,
  431,
  467,
  726,
  798,
  13,
  599,
  248,
  446,
  69,
  736,
  513,
  80,
  659,
  904,
  475,
  812,
  56,
  360,
  952,
  257,
  826,
  165,
  873,
  386,
  324,
  492,
  809,
  741,
  266,
  780,
  578,
  635,
  138,
  874,
  625,
  796,
  867,
  818,
  754,
  788,
  416,
  222,
  910,
  263,
  95,
  971,
  673,
  174,
  539,
  423,
  949,
  155,
  802,
  435,
  143,
  62,
  766,
  527,
  258,
  459,
  888,
  953,
  833,
  52,
  995,
  233,
  275,
  895,
  615,
  149,
  546,
  339,
  597,
  44,
  433,
  126,
  604,
  343,
  3,
  941,
  817,
  579,
  33,
  162,
  75,
  565,
  274,
  287,
  123,
  212,
  51,
  858,
  998,
  37,
  769,
  698,
  380,
  896,
  528,
  648,
  621,
  350,
  407,
  17,
  589,
  797,
  169,
  714,
  639,
  216,
  531,
  775,
  330,
  365,
  980,
  721,
  657,
  6,
  871,
  731,
  68,
  503,
  146,
  195,
  711,
  849,
  644,
  916,
  245,
  649,
  256,
  375,
  57,
  967,
  968,
  892,
  438,
  4,
  902,
  671,
  791,
  164,
  230,
  168,
  10,
  73,
  813,
  989,
  301,
  237,
  192,
  392,
  533,
  700,
  965,
  708,
  8,
  661,
  596,
  590,
  977,
  618,
  83,
  728,
  24,
  220,
  667,
  176,
  199,
  566,
  557,
  405,
  489,
  869,
  308,
  209,
  637,
  822,
  924,
  201,
  323,
  830,
  221,
  15,
  465,
  943,
  975,
  213,
  958,
  764,
  300,
  713,
  12,
  545,
  912,
  624,
  628,
  356,
  695,
  550,
  265,
  951,
  484,
  718,
  779,
  595,
  160,
  572,
  374,
  501,
  795,
  532,
  364,
  547,
  486,
  151,
  641,
  204,
  137,
  150,
  972,
  406,
  46,
  468,
  868,
  704,
  744,
  785,
  85,
  102,
  887,
  54,
  483,
  932,
  857,
  113,
  410,
  640,
  936,
  312,
  614,
  820,
  29,
  42,
  831,
  806,
  79,
  945,
  979,
  107,
  277,
  91,
  270,
  255,
  814,
  710,
  970,
  562,
  504,
  447,
  363,
  500,
  98,
  110,
  249,
  674,
  115,
  355,
  987,
  421,
  460,
  234,
  737,
  727,
  962,
  883,
  58,
  875,
  733,
  670,
  787,
  361,
  109,
  367,
  458,
  441,
  508,
  870,
  773,
  701,
  876,
  829,
  259,
  783,
  622,
  268,
  937,
  891,
  765,
  448,
  584,
  493,
  293,
  898,
  184,
  848,
  224,
  752,
  699,
  746,
  226,
  880,
  187,
  469,
  244,
  153,
  636,
  734,
  762,
  478,
  571,
  837,
  439,
  443,
  519,
  379,
  514,
  959,
  586,
  64,
  347,
  878,
  690,
  55,
  616,
  452,
  992,
  583,
  170,
  173,
  369,
  254,
  697,
  544,
  242,
  786,
  654,
  397,
  942,
  451,
  203,
  188,
  298,
  89,
  148,
  738,
  865,
  152,
  844,
  25,
  559,
  530,
  558,
  235,
  289,
  286,
  357,
  319,
  905,
  105,
  535,
  679,
  739,
  600,
  398,
  223,
  477,
  436,
  523,
  292,
  172,
  683,
  930,
  906,
  142,
  67,
  288,
  77,
  7,
  632,
  768,
  709,
  569,
  827,
  712,
  540,
  154,
  285,
  479,
  553,
  425,
  280,
  758,
  524,
  642,
  61,
  409,
  313,
  317,
  646,
  276,
  314,
  901,
  605,
  877,
  922,
  336,
  47,
  403,
  855,
  388,
  371,
  23,
  669,
  332,
  960,
  351,
  879,
  420,
  228,
  707,
  885,
  219,
  18,
  693,
  543,
  296,
  537,
  645,
  11,
  214,
  889,
  749,
  136,
  843,
  31,
  839,
  175,
  587,
  239,
  852,
  568,
  689,
  119,
  985,
  335,
  281,
  706,
  515,
  984,
  215,
  574,
  395,
  96,
  846,
  445,
  770,
  691,
  158,
  217,
  106,
  966,
  602,
  903,
  373,
  494,
  835,
  440,
  963,
  232,
  414,
  133,
  34,
  884,
  582,
  205,
  716,
  278,
  627,
  675,
  634,
  617,
  946,
  789,
  819,
  573,
  145,
  466,
  507,
  144,
  305,
  498,
  327,
  799,
  59,
  859,
  139,
  140,
  117,
  1,
  631,
  338,
  2,
  40,
  341,
  290,
  366,
  30,
  735,
  229,
  983,
  681,
  601,
  422,
  623,
  564,
  815,
  665,
  526,
  437,
  757,
  961,
  442,
  838,
  19,
  310,
  487,
  801,
  534,
  264,
  70,
  666,
  411,
  157,
  563,
  626,
  776,
  928,
  352,
  349,
  412,
  396,
  114,
  21,
  847,
  638,
  753,
  598,
  135,
  196,
  581,
  808,
  619,
  988,
  778,
  307,
  94,
  282,
  575,
  792,
  302,
  663,
  577,
  74,
  947,
  725,
  990,
  297,
  389,
  238,
  555,
  455,
  306,
  724,
  38,
  426,
  767,
  933,
  372,
  588,
  454,
  747,
  179,
  167,
  118,
  194,
  592,
  100,
  851,
  240,
  390,
  14,
  309,
  509,
  81,
  490,
  821,
  49,
  816,
  60,
  926,
  348,
  781,
  191,
  836,
  78,
  207,
  108,
  607,
  863,
  909,
  603,
  457,
  243,
  485,
  400,
  782,
  790,
  964,
  368,
  87,
  548,
  881,
  267,
  340,
  225,
  430,
  512,
  376,
  342,
  130,
  16,
  28,
  551,
  655,
  328,
  481,
  899,
  103,
  241,
  917,
  45,
  576,
  828,
  567,
  182,
  134,
  269,
  660,
  774,
  900,
  444,
  840,
  694,
  955,
  920,
  41,
  541,
  303,
  629,
  359,
  177,
  978,
  127,
  246,
  732,
  236,
  872,
  536,
  759,
  982,
  561,
  180,
  261,
  378,
  610,
  262,
  32,
  283,
  326,
  185,
  686,
  580,
  914,
  805,
  893,
  322,
  461,
  304,
  807,
  866,
  333,
  860,
  404,
  163,
  715,
  950,
  925,
  613,
];

function filtrarNumerosMaioresQue50(listaCompleta) {
  let maioresQue50 = listaCompleta.filter((lista) => lista > 50);
  return maioresQue50;
}

let resultado = filtrarNumerosMaioresQue50(entrada);

console.log(resultado);
