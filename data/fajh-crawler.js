/**
 * 目前所有的方案计划号（截止2018-12-17）
 *
 */
const fajhhs = ["2", "5", "6", "7", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "62", "63", "64", "65", "66", "67", "68", "69", "70", "121", "182", "201", "222", "223", "225", "241", "242", "261", "302", "428", "461", "501", "523", "713", "714", "715", "716", "717", "718", "719", "720", "734", "739", "740", "741", "742", "743", "744", "745", "746", "747", "748", "749", "750", "751", "752", "753", "754", "755", "756", "757", "759", "760", "761", "762", "763", "765", "766", "767", "768", "769", "771", "772", "773", "774", "775", "776", "778", "779", "780", "782", "783", "784", "785", "786", "787", "788", "789", "790", "791", "792", "793", "794", "795", "796", "797", "798", "799", "800", "801", "802", "803", "804", "805", "808", "809", "810", "811", "812", "813", "814", "815", "816", "817", "818", "819", "820", "821", "822", "823", "824", "825", "826", "827", "828", "829", "830", "831", "832", "833", "834", "835", "836", "838", "839", "840", "841", "842", "843", "844", "845", "846", "847", "848", "849", "850", "853", "854", "856", "857", "858", "859", "860", "861", "862", "863", "864", "865", "866", "867", "868", "869", "870", "871", "872", "873", "874", "875", "876", "882", "883", "884", "885", "887", "888", "889", "890", "891", "892", "893", "894", "895", "897", "899", "900", "905", "906", "908", "909", "921", "922", "923", "924", "926", "927", "928", "929", "930", "932", "933", "934", "935", "936", "937", "964", "965", "971", "972", "975", "983", "1001", "1002", "1006", "1007", "1041", "1042", "1043", "1062", "1064", "1086", "1102", "1103", "1104", "1128", "1141", "1201", "1221", "1241", "1341", "1342", "1345", "1348", "1446", "1463", "1465", "1466", "1467", "1468", "1469", "1470", "1471", "1472", "1473", "1475", "1476", "1477", "1478", "1479", "1480", "1483", "1484", "1501", "1502", "1503", "1504", "1505", "1506", "1507", "1508", "1510", "1512", "1514", "1515", "1516", "1517", "1518", "1522", "1523", "1524", "1525", "1526", "1527", "1528", "1529", "1530", "1531", "1532", "1533", "1534", "1535", "1536", "1537", "1538", "1539", "1540", "1541", "1542", "1543", "1544", "1545", "1546", "1547", "1548", "1549", "1550", "1551", "1552", "1553", "1554", "1555", "1556", "1557", "1558", "1559", "1560", "1561", "1562", "1563", "1564", "1565", "1566", "1567", "1568", "1569", "1570", "1571", "1572", "1573", "1574", "1575", "1576", "1577", "1581", "1582", "1583", "1584", "1585", "1586", "1587", "1588", "1589", "1590", "1591", "1592", "1593", "1594", "1595", "1596", "1597", "1598", "1599", "1600", "1601", "1602", "1603", "1604", "1605", "1606", "1607", "1608", "1609", "1610", "1611", "1612", "1613", "1614", "1615", "1616", "1617", "1618", "1619", "1620", "1621", "1622", "1623", "1624", "1625", "1626", "1641", "1642", "1643", "1644", "1645", "1646", "1647", "1648", "1649", "1651", "1652", "1653", "1654", "1655", "1656", "1657", "1658", "1659", "1660", "1661", "1662", "1663", "1664", "1665", "1666", "1667", "1668", "1669", "1670", "1671", "1672", "1673", "1674", "1676", "1677", "1679", "1680", "1681", "1682", "1701", "1742", "1747", "1762", "1763", "1769", "1770", "1771", "1772", "1773", "1774", "1775", "1776", "1777", "1778", "1779", "1780", "1781", "1782", "1783", "1784", "1785", "1786", "1789", "1790", "1791", "1792", "1793", "1809", "1810", "1812", "1813", "2442", "2443", "2444", "2445", "2446", "2447", "2448", "2449", "2450", "2451", "2452", "2453", "2454", "2455", "2456", "2457", "2458", "2459", "2460", "2461", "2462", "2463", "2464", "2465", "2466", "2467", "2468", "2469", "2470", "2471", "2472", "2473", "2474", "2475", "2476", "2477", "2478", "2480", "2481", "2482", "2483", "2485", "2486", "2487", "2488", "2490", "2491", "2492", "2493", "2494", "2495", "2496", "2497", "2498", "2499", "2500", "2501", "2502", "2504", "2505", "2506", "2507", "2508", "2509", "2510", "2511", "2512", "2513", "2514", "2515", "2516", "2517", "2518", "2519", "2520", "2521", "2522", "2523", "2524", "2525", "2526", "2527", "2528", "2529", "2530", "2531", "2532", "2533", "2534", "2535", "2536", "2537", "2538", "2539", "2540", "2541", "2542", "2543", "2544", "2545", "2546", "2547", "2548", "2549", "2550", "2551", "2552", "2553", "2555", "2556", "2557", "2558", "2559", "2560", "2561", "2562", "2563", "2564", "2565", "2566", "2567", "2568", "2570", "2571", "2572", "2573", "2574", "2575", "2576", "2577", "2578", "2579", "2580", "2581", "2582", "2583", "2584", "2585", "2586", "2587", "2588", "2589", "2590", "2591", "2592", "2593", "2594", "2595", "2596", "2597", "2598", "2599", "2600", "2601", "2602", "2603", "2604", "2605", "2607", "2608", "2609", "2610", "2611", "2612", "2613", "2614", "2615", "2616", "2617", "2618", "2619", "2620", "2621", "2622", "2623", "2624", "2625", "2626", "2627", "2628", "2629", "2630", "2631", "2632", "2633", "2634", "2635", "2636", "2637", "2638", "2639", "2640", "2641", "2642", "2643", "2644", "2649", "2670", "2671", "2672", "2687", "2696", "2701", "2702", "2703", "2705", "2706", "2707", "2710", "2711", "2718", "2723", "2724", "2725", "2726", "2729", "2730", "2731", "2733", "2734", "2735", "2736", "2738", "2739", "2741", "2743", "2751", "2758", "2759", "2760", "2761", "2762", "2763", "2764", "2765", "2767", "2768", "2769", "2770", "2771", "2772", "2773", "2774", "2775", "2776", "2777", "2778", "2779", "2780", "2781", "2783", "2785", "2788", "2789", "2790", "2791", "2792", "2793", "2794", "2795", "2796", "2797", "2798", "2799", "2800", "2801", "2802", "2803", "2804", "2805", "2806", "2807", "2808", "2809", "2810", "2811", "2812", "2813", "2814", "2815", "2816", "2817", "2818", "2819", "2820", "2821", "2822", "2823", "2824", "2825", "2826", "2827", "2828", "2830", "2831", "2832", "2833", "2834", "2836", "2837", "2838", "2840", "2841", "2842", "2843", "2844", "2845", "2846", "2847", "2848", "2849", "2850", "2851", "2852", "2853", "2854", "2855", "2856", "2857", "2858", "2859", "2860", "2862", "2863", "2864", "2865", "2866", "2867", "2868", "2869", "2870", "2871", "2872", "2873", "2874", "2875", "2876", "2877", "2878", "2879", "2880", "2881", "2882", "2883", "2884", "2885", "2886", "2887", "2888", "2890", "2891", "2893", "2895", "2896", "2897", "2898", "2899", "2901", "2902", "2903", "2904", "2905", "2906", "2907", "2908", "2909", "2910", "2911", "2912", "2913", "2914", "2915", "2916", "2917", "2918", "2919", "2920", "2921", "2922", "2923", "2924", "2925", "2926", "2927", "2928", "2929", "2930", "2931", "2932", "2933", "2934", "2935", "2936", "2937", "2938", "2939", "2940", "2941", "2942", "2944", "2945", "2946", "2947", "2949", "2950", "2951", "2952", "2953", "2954", "2955", "2956", "2957", "2958", "2959", "2960", "2961", "2962", "2963", "2964", "2965", "2966", "2967", "2968", "2969", "2970", "2971", "2972", "2973", "2974", "2975", "2976", "2977", "2978", "2979", "2980", "2981", "2982", "2983", "2984", "2985", "2987", "2988", "2989", "2990", "2991", "2993", "2994", "2995", "2996", "2998", "3002", "3003", "3005", "3011", "3013", "3029", "3050", "3051", "3058", "3059", "3060", "3061", "3062", "3063", "3064", "3065", "3066", "3067", "3068", "3069", "3070", "3071", "3072", "3073", "3074", "3075", "3076", "3078", "3079", "3090", "3093", "3094", "3095", "3096", "3097", "3098", "3100", "3102", "3103", "3105", "3106", "3108", "3110", "3113", "3114", "3129", "3130", "3131", "3132", "3133", "3134", "3135", "3136", "3137", "3138", "3139", "3140", "3141", "3142", "3143", "3144", "3145", "3146", "3147", "3149", "3150", "3151", "3152", "3153", "3154", "3155", "3157", "3158", "3159", "3160", "3161", "3162", "3163", "3164", "3165", "3166", "3167", "3168", "3169", "3170", "3171", "3172", "3173", "3174", "3175", "3176", "3177", "3178", "3179", "3180", "3181", "3182", "3183", "3184", "3185", "3186", "3187", "3188", "3189", "3190", "3191", "3192", "3193", "3194", "3195", "3197", "3198", "3199", "3200", "3201", "3202", "3203", "3204", "3205", "3206", "3207", "3208", "3209", "3210", "3211", "3212", "3213", "3214", "3215", "3216", "3217", "3218", "3220", "3221", "3222", "3223", "3224", "3225", "3226", "3227", "3228", "3229", "3230", "3231", "3232", "3233", "3234", "3235", "3236", "3237", "3238", "3239", "3240", "3241", "3242", "3243", "3244", "3246", "3247", "3248", "3249", "3250", "3251", "3252", "3253", "3254", "3255", "3256", "3257", "3258", "3259", "3260", "3261", "3262", "3265", "3267", "3268", "3269", "3270", "3271", "3272", "3273", "3274", "3275", "3277", "3278", "3279", "3280", "3281", "3282", "3283", "3284", "3285", "3286", "3287", "3288", "3289", "3290", "3291", "3292", "3293", "3294", "3295", "3296", "3297", "3299", "3300", "3301", "3302", "3303", "3304", "3305", "3306", "3307", "3308", "3309", "3310", "3311", "3312", "3313", "3314", "3315", "3316", "3317", "3318", "3319", "3320", "3321", "3322", "3323", "3324", "3325", "3326", "3327", "3331", "3333", "3334", "3360", "3361", "3362", "3363", "3364", "3365", "3366", "3369", "3370", "3371", "3372", "3373", "3374", "3375", "3376", "3377", "3378", "3379", "3382", "3409", "3410", "3411", "3413", "3414", "3416", "3417", "3418", "3419", "3420", "3421", "3422", "3423", "3424", "3425", "3426", "3427", "3428", "3429", "3430", "3431", "3432", "3433", "3436", "3437", "3438", "3440", "3442", "3444", "3445", "3446", "3447", "3448", "3449", "3450", "3451", "3452", "3453", "3454", "3455", "3456", "3457", "3458", "3459", "3460", "3461", "3463", "3464", "3465", "3466", "3467", "3468", "3469", "3470", "3471", "3472", "3473", "3474", "3475", "3477", "3478", "3479", "3480", "3481", "3482", "3483", "3484", "3485", "3486", "3487", "3488", "3490", "3491", "3492", "3493", "3494", "3495", "3496", "3497", "3499", "3500", "3501", "3502", "3503", "3504", "3505", "3506", "3507", "3510", "3511", "3512", "3513", "3514", "3515", "3516", "3517", "3518", "3519", "3520", "3521", "3522", "3523", "3524", "3525", "3526", "3527", "3528", "3529", "3530", "3531", "3532", "3533", "3534", "3535", "3536", "3537", "3538", "3539", "3540", "3541", "3542", "3543", "3544", "3545", "3546", "3547", "3548", "3549", "3550", "3551", "3552", "3554", "3555", "3556", "3557", "3558", "3559", "3560", "3562", "3563", "3564", "3565", "3566", "3567", "3568", "3569", "3570", "3571", "3572", "3573", "3574", "3575", "3576", "3577", "3578", "3579", "3580", "3581", "3582", "3583", "3584", "3585", "3586", "3587", "3588", "3589", "3590", "3591", "3592", "3593", "3594", "3595", "3596", "3597", "3598", "3599", "3600", "3601", "3602", "3603", "3604", "3605", "3606", "3607", "3608", "3609", "3610", "3611", "3612", "3613", "3614", "3615", "3616", "3617", "3618", "3619", "3620", "3621", "3622", "3623", "3654", "3655", "3656", "3657", "3660", "3661", "3672", "3675", "3676", "3677", "3679", "3680", "3681", "3702", "3703", "3774", "3796", "3797", "3800", "3801", "3802", "3803", "3804", "3805", "3806", "3807", "3809", "3810", "3811", "3812", "3813", "3814", "4254", "4255", "4256", "4257", "4258", "4260", "4261", "4262", "4263", "4264", "4265", "4266", "4267", "4268", "4269", "4270", "4271", "4272", "4273", "4274", "4275", "4276", "4277", "4278", "4279", "4281", "4282", "4283", "4284", "4285", "4287", "4288", "4289", "4290", "4291", "4292", "4293", "4294", "4295", "4296", "4297", "4298", "4299", "4300", "4302", "4303", "4304", "4305", "4306", "4307", "4308", "4309", "4310", "4311", "4312", "4313", "4314", "4315", "4316", "4317", "4318", "4319", "4320", "4321", "4322", "4323", "4324", "4325", "4326", "4327", "4328", "4329", "4330", "4331", "4332", "4333", "4334", "4335", "4336", "4337", "4338", "4339", "4340", "4341", "4343", "4344", "4345", "4346", "4347", "4348", "4349", "4350", "4351", "4352", "4353", "4354", "4355", "4356", "4357", "4358", "4359", "4360", "4361", "4362", "4363", "4364", "4365", "4366", "4367", "4368", "4369", "4370", "4371", "4372", "4373", "4374", "4375", "4376", "4377", "4378", "4379", "4380", "4381", "4382", "4383", "4384", "4385", "4386", "4388", "4389", "4390", "4391", "4392", "4393", "4394", "4395", "4396", "4397", "4398", "4399", "4400", "4402", "4403", "4404", "4405", "4406", "4407", "4408", "4409", "4410", "4411", "4412", "4413", "4414", "4415", "4416", "4417", "4418", "4419", "4420", "4421", "4422", "4423", "4424", "4425", "4426", "4427", "4428", "4429", "4430", "4431", "4432", "4433", "4434", "4435", "4436", "4437", "4438", "4439", "4441", "4442", "4443", "4444", "4445", "4446", "4447", "4448", "4449", "4450", "4451", "4452", "4453", "4454", "4455", "4456", "4457", "4458", "4459", "4460", "4461", "4462", "4463", "4464", "4465", "4466", "4468", "4469", "4470", "4471", "4472", "4473", "4475", "4476", "4477", "4478", "4480", "4494", "4497", "4498", "4499", "4500", "4502", "4505", "4536", "4537", "4538", "4539", "4540", "4541", "4542", "4543", "4544", "4545", "4546", "4547", "4548", "4549", "4550", "4575", "4577", "5882", "5883", "5884", "5885", "5886", "5888", "5889", "5890", "5891", "5892", "5893", "5894", "5895", "5896", "5897", "5898", "5899", "5900", "5901", "5902", "5903", "5904", "5905", "5906", "5907", "5908", "5909", "5910", "5911", "5912", "5913", "5914", "5915", "5916", "5917", "5918", "5919", "5920", "5921", "5922", "5923", "5924", "5925", "5926", "5927", "5928", "5929", "5930", "5933", "5934", "5935", "5937", "5938", "5939", "5940", "5941", "5942", "5943", "5945", "5946", "5947", "5948", "5949", "5950", "5951", "5952", "5953", "5954", "5955", "5956", "5957", "5958", "5960", "5961", "5962", "5963", "5964", "5965", "5966", "5967", "5968", "5969", "5970", "5971", "5972", "5973", "5975", "5976", "5979", "5980", "5981", "5982", "5983", "5984", "5985", "5986", "5987", "5988", "5989", "5990", "5991", "5992", "5993", "5994", "5995", "5996", "5997", "5998", "5999", "6002", "6003", "6004", "6005", "6006", "6007", "6008", "6009", "6010", "6011", "6012", "6013", "6014", "6015", "6016", "6017", "6018", "6019", "6021", "6022", "6023", "6024", "6025", "6026", "6027", "6028", "6029", "6030", "6032", "6033", "6034", "6035", "6036", "6037", "6038", "6039", "6040", "6041", "6042", "6043", "6044", "6045", "6046", "6048", "6049", "6050", "6051", "6052", "6053", "6054", "6055", "6056", "6058", "6059", "6060", "6061", "6062", "6063", "6065", "6066", "6067", "6068", "6069", "6070", "6071", "6072", "6073", "6074", "6075", "6076", "6077", "6078", "6079", "6080", "6081", "6082", "6083", "6084", "6085", "6086", "6087", "6088", "6089", "6090", "6091", "6093", "6094", "6095", "6096", "6097", "6099", "6101", "6102", "6103", "6104", "6105", "6106", "6107", "6108", "6109", "6110", "6111", "6112", "6113", "6114", "6116", "6118", "6119", "6120", "6121", "6122", "6123", "6124", "6125", "6126", "6127", "6128", "6129", "6130", "6131", "6132", "6133", "6134", "6135", "6136", "6137", "6138", "6139", "6140", "6141", "6142", "6145", "6146", "6147", "6148", "6149", "6150", "6151", "6152", "6153", "6154", "6155", "6156", "6157", "6158", "6159", "6160", "6161", "6164", "6165", "6166", "6168", "6169", "6170", "6171", "6172", "6173", "6174", "6175", "6176", "6177", "6178", "6179", "6180", "6181", "6182", "6183", "6184", "6185", "6186", "6187", "6188", "6189", "6190", "6191", "6192", "6193", "6194", "6195", "6196", "6197", "6198", "6199", "6200", "6201", "6202", "6203", "6204", "6205", "6206", "6207", "6208", "6209", "6210", "6211", "6212", "6213", "6214", "6216", "6217", "6218", "6219", "6220", "6221", "6222", "6223", "6224", "6225", "6226", "6227", "6228", "6229", "6230", "6231", "6232", "6233", "6234", "6235", "6236", "6237", "6239", "6240", "6241", "6242", "6243", "6244", "6245", "6246", "6247", "6248", "6249", "6250", "6251", "6252", "6253", "6256", "6257", "6259", "6260", "6261", "6262", "6264", "6265", "6266", "6267", "6268", "6269", "6270", "6271", "6272", "6273", "6276", "6277", "6278", "6279", "6280", "6281", "6284", "6285", "6286", "6287", "6288", "6289", "6291", "6292", "6293", "6294", "6295", "6296", "6297", "6298", "6299", "6300", "6301", "6302", "6303", "6304", "6305", "6306", "6307", "6308", "6309", "6311", "6314", "6315", "6317", "6318", "6319", "6320", "6321", "6322", "6323", "6324", "6325", "6326", "6327", "6328", "6329", "6330", "6332", "6333", "6334", "6335", "6336", "6337", "6338", "6339", "6340", "6341", "6342", "6343", "6344", "6345", "6346", "6347", "6348", "6349", "6350", "6351", "6352", "6353", "6354", "6355", "6356", "6357", "6359", "6360", "6361", "6362", "6363", "6364", "6365", "6366", "6367", "6368", "6369", "6370", "6371", "6372", "6373", "6374", "6375", "6376", "6377", "6378", "6379", "6380", "6381", "6384", "6385", "6386", "6387", "6388", "6389", "6390", "6392", "6393", "6394", "6395", "6396", "6397", "6398", "6399", "6400", "6401", "6402", "6403", "6404", "6405", "6406", "6407", "6408", "6410", "6411", "6412", "6413", "6414", "6415", "6418", "6421", "6423", "6424", "6425", "6426", "6427", "6428", "6430", "6431", "6432", "6433", "6434", "6435", "6436", "6437", "6438", "6439", "6440", "6441", "6443", "6444", "6445", "6446", "6448", "6449", "6450", "6451", "6452", "6453", "6456", "6457", "6458", "6459", "6460", "6461", "6462", "6463", "6464", "6465", "6466", "6467", "6470", "6471", "6473", "6474", "6475", "6476", "6477", "6478", "6479", "6480", "6481", "6482", "6483", "6484", "6485", "6486", "6487", "6489", "6490", "6491", "6492", "6493", "6494", "6495", "6496", "6497", "6498", "6499", "6500", "6501", "6502", "6505", "6506", "6507", "6508", "6509", "6510", "6511", "6512", "6513", "6514", "6516", "6517", "6518", "6519", "6520", "6521", "6522", "6523", "6524", "6525", "6526", "6527", "6528", "6529", "6531", "6532", "6534", "6535", "6538", "6539", "6540", "6541", "6543", "6544", "6545", "6546", "6547", "6548", "6549", "6550", "6551", "6552", "6553", "6554", "6556", "6557", "6558", "6559", "6561", "6562", "6563", "6564", "6565", "6566", "6567", "6568", "6569", "6570", "6571", "6572", "6573", "6574", "6575", "6576", "6577", "6578", "6579", "6580", "6581", "6582", "6583", "6584", "6585", "6586", "6587", "6588", "6589", "6590", "6592", "6593", "6594", "6595", "6598", "6599", "6600", "6601", "6602", "6603", "6604", "6605", "6606", "6607", "6608", "6609", "6610", "6611", "6612", "6613", "6614", "6615", "6616", "6617", "6618", "6619", "6620", "6621", "6622", "6623", "6624", "6625", "6626", "6627", "6628", "6629", "6630", "6631", "6632", "6633", "6634", "6635", "6636", "6637", "6639", "6640", "6641", "6643", "6644", "6645", "6646", "6647", "6648", "6649", "6650", "6651", "6652", "6653", "6654", "6655", "6656", "6659", "6660", "6661", "6662", "6663", "6664", "6665", "6666", "6667", "6668", "6669", "6670", "6671", "6672", "6673", "6674", "6675", "6678", "6679", "6681", "6682", "6683", "6684", "6685", "6686", "6687", "6688", "6689", "6690", "6691", "6692", "6694", "6695", "6696", "6697", "6698", "6699", "6701", "6702", "6703", "6704", "6705", "6706", "6707", "6708", "6709", "6710", "6711", "6713", "6714", "6715", "6716", "6717", "6719", "6720", "6721", "6722", "6723", "6724", "6725", "6726", "6727", "6728", "6729", "6730", "6731", "6732", "6733", "6734", "6735", "6736", "6737", "6738", "6739", "6740", "6741", "6742", "6743", "6744", "6745", "6746", "6747", "6748", "6749", "6750", "6751", "6752", "6753", "6754", "6755", "6756", "6757", "6758", "6759", "6760", "6761", "6762", "6763", "6764", "6765", "6766", "6767", "6768", "6769", "6770", "6771", "6772", "6773", "6774", "6775", "6776", "6777", "6778", "6779", "6780", "6781", "6782", "6783", "6784", "6785", "6786", "6787", "6788", "6789", "6790", "6791", "6792", "6793", "6794", "6795", "6796", "6797", "6799", "6800", "6801", "6802", "6803", "6804", "6805", "6806", "6807", "6808", "6809", "6810", "6811", "6813", "6814", "6815", "6816", "6817", "6818", "6819", "6820", "6821", "6822", "6823", "6824", "6825", "6826", "6827", "6828", "6829", "6830", "6831", "6832", "6833", "6834", "6835", "6836", "6837", "6838", "6839", "6840", "6841", "6842", "6843", "6844", "6845", "6846", "6847", "6848", "6849", "6850", "6851", "6852", "6853", "6854", "6855", "6856", "6857", "6858", "6859", "6860", "6861", "6862", "6863", "6864", "6865", "6866", "6867", "6868", "6869", "6870", "6871", "6872", "6874", "6875", "6876", "6877", "6878", "6879", "6880", "6881", "6882", "6883", "6884", "6885", "6886", "6887", "6889", "6890", "6891", "6892", "6893", "6894", "6895", "6896", "6897", "6898", "6899", "6900", "6901", "6902", "6903", "6904", "6905", "6906", "6907", "6908", "6909", "6910", "6911", "6912", "6913", "6914", "6915", "6916", "6917", "6918", "6919", "6920", "6921", "6922", "6923", "6924", "6925", "6926", "6927", "6928", "6929", "6930", "6931", "6933", "6934", "6935", "6936", "6937", "6938", "6939", "6940", "6941", "6942", "6943", "6944", "6945", "6946", "6947", "6948", "6949", "6950", "6951", "6953", "6954", "6955", "6956", "6957", "6958", "6959", "6960", "6961", "6962", "6963", "6964", "6965", "6966", "6967", "6968", "6969", "6970", "6971", "6972", "6973", "6974", "6975", "6976", "6977", "6978", "6979", "6980", "6981", "6982", "6983", "6984", "6985", "6986", "6987", "6988", "6989", "6990", "6991", "6992", "6993", "6994", "6995", "6996", "6997", "6998", "6999", "7000", "7001", "7002", "7003", "7004", "7005", "7006", "7007", "7008", "7009", "7010", "7011", "7012", "7013", "7014", "7015", "7016", "7017", "7018", "7019", "7020", "7021", "7022", "7023", "7024", "7025", "7026", "7027", "7028", "7029", "7030", "7031", "7032", "7033", "7034", "7035", "7036", "7037", "7038", "7039", "7040", "7041", "7042", "7043", "7044", "7045", "7046", "7047", "7048", "7049", "7050", "7051", "7052", "7053", "7054", "7055", "7056", "7057", "7058", "7059", "7060", "7061", "7062", "7063", "7064", "7065", "7066", "7067", "7068", "7069", "7070", "7071", "7072", "7073", "7074", "7075", "7076", "7077", "7078", "7079", "7080", "7081", "7082", "7083", "7084", "7085", "7086", "7087", "7088", "7089", "7090", "7091", "7092", "7093", "7094", "7095", "7096", "7097", "7098", "7099", "7100", "7101", "7102", "7103", "7104", "7105", "7106", "7107", "7108", "7109", "7110", "7111", "7112", "7113", "7114", "7115", "7116", "7117", "7118", "7119", "7120", "7121", "7122", "7123", "7124", "7125", "7127", "7128", "7129", "7130", "7131", "7132", "7133", "7134", "7135", "7136", "7137", "7138", "7139", "7140", "7141", "7142", "7143", "7144", "7145", "7146", "7147", "7148", "7149", "7150", "7151", "7152", "7153", "7154", "7155", "7156", "7157", "7158", "7159", "7160", "7161", "7162", "7163", "7165", "7166", "7167", "7168", "7169", "7170", "7171", "7172", "7173", "7174", "7175", "7176", "7177", "7178", "7179", "7180", "7181", "7182", "7183", "7184", "7185", "7186", "7187", "7188", "7189", "7190", "7191", "7192", "7193", "7194", "7195", "7196", "7197", "7198", "7199", "7200", "7201", "7202", "7203", "7204", "7205", "7206", "7207", "7208", "7209", "7210", "7211", "7212", "7213", "7214", "7215", "7216", "7217", "7218", "7219", "7220", "7221", "7222", "7223", "7224", "7225", "7226", "7227", "7228", "7229", "7230", "7231", "7232", "7233", "7234", "7235", "7236", "7237", "7238", "7239", "7240", "7241", "7242", "7243", "7244", "7245", "7246", "7247", "7248", "7249", "7250", "7251", "7252", "7253", "7254", "7255", "7256", "7257", "7258", "7259", "7260", "7261", "7262", "7263", "7264", "7265", "7266", "7267", "7268", "7269", "7270", "7271", "7272", "7273", "7274", "7275", "7276", "7277", "7278", "7279", "7280", "7281", "7282", "7283", "7284", "7285", "7286", "7287", "7288", "7289", "7290", "7291", "7292", "7293", "7294", "7295", "7296", "7297", "7298", "7299", "7300", "7301", "7302", "7303", "7304", "7305", "7306", "7307", "7308", "7309", "7310", "7311", "7312", "7313", "7314", "7315", "7316", "7317", "7318", "7319", "7320", "7321", "7322", "7323", "7324", "7325", "7326", "7327", "7328", "7329", "7330", "7331", "7332", "7333", "7334", "7335", "7336", "7337", "7338", "7339", "7340", "7341", "7342", "7343", "7344", "7345", "7346", "7347", "7348", "7349", "7350", "7351", "7352", "7353", "7354", "7355", "7356", "7357", "7358", "7359", "7360", "7361", "7362", "7363", "7364", "7365", "7366", "7367", "7368", "7369", "7370", "7371", "7372", "7373", "7374", "7375", "7376", "7377", "7378", "7379", "7380", "7381", "7382", "7383", "7384", "7385", "7386", "7387", "7388", "7389", "7390", "7391", "7392", "7393", "7394", "7395", "7396", "7397", "7398", "7399", "7400", "7401", "7402", "7403", "7404", "7405", "7406", "7407", "7408", "7409", "7410", "7411", "7412", "7413", "7414", "7415", "7416", "7417", "7418", "7419", "7420", "7421", "7422", "7423", "7424", "7425", "7426", "7427", "7428", "7429", "7430", "7431", "7432", "7433", "7434", "7435", "7436", "7437", "7438", "7439", "7440", "7441", "7442", "7443", "7444", "7445", "7446", "7447", "7448", "7449", "7450", "7451", "7452", "7453", "7454", "7455", "7456", "7457", "7458", "7459", "7460", "7461", "7462", "7463", "7464", "7465", "7466", "7467", "7468", "7469", "7470", "7471", "7472", "7473", "7474", "7475", "7476", "7477", "7478", "7479", "7480", "7481", "7482", "7483", "7484", "7485", "7486", "7487", "7488", "7489", "7490", "7491", "7492", "7493", "7494", "7495", "7496", "7497", "7498", "7499", "7500", "7501", "7502", "7503", "7504", "7505", "7506", "7507", "7508", "7509", "7510", "7511", "7512", "7513", "7514", "7515", "7516", "7517", "7518", "7519", "7520", "7521", "7522", "7523", "7524", "7525", "7526", "7527", "7528", "7529", "7530", "7531", "7532", "7533", "7534", "7535", "7536", "7537", "7538", "7539", "7540", "7541", "7542", "7543", "7544", "7545", "7546", "7547", "7548", "7549", "7550", "7551", "7552", "7553", "7554", "7555", "7556", "7557", "7558", "7559", "7560", "7561", "7562", "7563", "7564", "7565", "7566", "7567", "7568", "7569", "7570", "7571", "7572", "7573", "7574", "7575", "7576", "7577"]

/**
 * 获取方案计划信息
 *
 * @param {*} fajhh 方案计划号
 * @returns 返回形如 <[属性, 值]>[] 的数组
 */
function getInfo (fajhh) {
  return fetch(`http://zhjwwx.scu.edu.cn:8080/xxInfoAction.do?infoType=fajhInfo&fajhh=${fajhh}`)
    .then(res => res.blob())
    .then(blob => new Promise(resolve => {
      let reader = new FileReader()
      reader.onload = () => resolve(reader.result)
      reader.readAsText(blob, 'GBK')
    }))
    .then(res => res.match(/<td.+?>\s+<p.+?><strong>(.+)<\/strong><\/p>\s+<\/td>\s+<td.+?>\s+(<p.+?>((.|\s)+?)<\/P>|.+)\s+<\/td>/g))
    .then(values => values.map(s => s.match(/<td.+?>\s+<p.+?><strong>(.+)<\/strong><\/p>\s+<\/td>\s+<td.+?>\s+(<p.+?>((.|\s)+?)<\/P>|.+)\s+<\/td>/)))
    .then(arr => arr.map(v => v[3] ? [v[1], v[3]] : [v[1], v[2]]))
    .then(data => data.map(values => values.map(v => v.replace(/&nbsp;/g, ''))))
}

/**
 * 获取指导性教学计划
 *
 * @param {*} fajhh 方案计划号
 * @returns 返回形如 <[节点ID, 父节点ID, 值]>[] 的数组
 */
function getJH (fajhh) {
  return fetch(`http://zhjwwx.scu.edu.cn:8080/jhFakzsViewAction.do?fajhh=${fajhh}&type=jh`)
    .then(res => res.blob())
    .then(blob => new Promise(resolve => {
      let reader = new FileReader()
      reader.onload = () => resolve(reader.result)
      reader.readAsText(blob, 'GBK')
    }))
    .then(res => res.match(/tree\.config\.useCookies=false;\r\n\r\n\r\n    ((.|\s)+?)\s+document\.write\(tree\);/)[1])
    .then(res => res.split(/\r\n\r\n\s+/))
    .then(arr => arr.map(s => s.match(/tree.add\("(.+?)","(.+?)","(.+?)\s*"/).slice(1, 4)))
}

/**
 * 获取培养方案
 *
 * @param {*} fajhh 方案计划号
 * @returns 返回形如 <[节点ID, 父节点ID, 值]>[] 的数组
 */
function getFA (fajhh) {
  return fetch(`http://zhjwwx.scu.edu.cn:8080/jhFakzsViewAction.do?fajhh=${fajhh}&type=fa`)
    .then(res => res.blob())
    .then(blob => new Promise(resolve => {
      let reader = new FileReader()
      reader.onload = () => resolve(reader.result)
      reader.readAsText(blob, 'GBK')
    }))
    .then(res => res.match(/tree\.config\.useCookies=false;\r\n\r\n\r\n((.|\s)+?)\s+document\.write\(tree\);/)[1])
    .then(res => res.split(/;\r\n\r\n/))
    .then(arr => arr.map(v => v.replace(/\r|\n/, '')))
    .then(arr => arr[0].length ? arr.map(s => s.match(/tree.add\("((?:.|\s)+?)","((?:.|\s)+?)","((?:.|\s)+?)","((?:.|\s)+?)"/).slice(1, 5)) : [])
    .then(data => data.map(arr => arr.map(v => v.replace(/\r|\n/g, ''))))
    .then(data => data.length ? data.map(v => [v[0], v[1], `[${v[3].match(/kch=(.+)$/) ? v[3].match(/kch=(.+)$/)[1] : ''}]${v[2]}`.replace('[]', '')]) : data)
}

function getFAJH (fajhh) {
  // return Promise.all([getInfo(fajhh), getJH(fajhh)])
  return Promise.all([getInfo(fajhh), getFA(fajhh), getJH(fajhh)])
    .then(values => ({
      '方案计划信息': values[0],
      '培养方案': values[1],
      '指导性教学计划': values[2]
    }))
}

(async () => {
  for (let i = 0; i < fajhhs.length; i++) {
    console.log(i, fajhhs.length)
    let data = await getFAJH(fajhhs[i])
    let info = data['方案计划信息']
    let filename = `${fajhhs[i]}-${info[2][1]}-${info[6][1]}-${info[4][1]}-${info[8][1]}-${info[9][1]}.json`
    console.save(data, filename)
  }
})()
