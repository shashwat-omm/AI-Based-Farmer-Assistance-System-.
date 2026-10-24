/**
 * Kisaan Sahayak – AI Farmer Assistance System
 * Outdoor-readable • 6 languages • Voice I/O • Verified-source only
 * Mandatory fallback for any unverified query
 */

/* ============================================
   VERIFIED KNOWLEDGE BASE
   Sources: Ministry of Agriculture & Farmers Welfare,
   PM-KISAN portal, PMFBY guidelines, RBI KCC circulars,
   Soil Health Card scheme docs, PMKSY guidelines (public).
   ============================================ */
const KNOWLEDGE = {
  schemes: {
    "pm-kisan": {
      id: "pm-kisan",
      icon: "💰",
      keywords: {
        en: ["pm-kisan", "pm kisan", "kisan samman", "6000", "income support", "direct benefit", "dbt"],
        hi: ["पीएम किसान", "प्रधानमंत्री किसान", "किसान सम्मान", "6000", "आय सहायता"],
        pa: ["ਪੀਐਮ ਕਿਸਾਨ", "ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਕਿਸਾਨ", "ਕਿਸਾਨ ਸਨਮਾਨ", "6000"],
        mr: ["पीएम किसान", "प्रधानमंत्री किसान", "शेतकरी सन्मान", "६०००"],
        ta: ["பிஎம் கிசான்", "பிரதமர் கிசான்", "6000"],
        te: ["పిఎం కిసాన్", "ప్రధాన మంత్రి కిసాన్", "6000"]
      },
      info: {
        en: `**PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)**

• Eligible landholding farmer families receive ₹6,000 per year in three equal instalments of ₹2,000.
• Amount is transferred directly to the beneficiary’s bank account (DBT).
• Registration via pmkisan.gov.in or Common Service Centres / state agriculture offices.
• Aadhaar-linked bank account is required.
• Exclusion criteria apply (income-tax payees, institutional landholders, etc.). Always verify eligibility on the official portal.

Source: Ministry of Agriculture & Farmers Welfare, Government of India.`,
        hi: `**पीएम-किसान (प्रधानमंत्री किसान सम्मान निधि)**

• पात्र भूमिधारक किसान परिवारों को प्रति वर्ष ₹6,000 तीन समान किस्तों (₹2,000) में दिए जाते हैं।
• राशि सीधे लाभार्थी के बैंक खाते में DBT के माध्यम से भेजी जाती है।
• पंजीकरण pmkisan.gov.in या कॉमन सर्विस सेंटर / राज्य कृषि कार्यालयों में।
• आधार-लिंक्ड बैंक खाता आवश्यक।
• कुछ श्रेणियाँ पात्र नहीं। पात्रता आधिकारिक पोर्टल पर जाँचें।

स्रोत: कृषि एवं किसान कल्याण मंत्रालय, भारत सरकार।`,
        pa: `**ਪੀਐਮ-ਕਿਸਾਨ (ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਕਿਸਾਨ ਸਨਮਾਨ ਨਿਧੀ)**

• ਯੋਗ ਜ਼ਮੀਨਧਾਰਕ ਕਿਸਾਨ ਪਰਿਵਾਰਾਂ ਨੂੰ ਸਾਲ ਵਿੱਚ ₹6,000 ਤਿੰਨ ਬਰਾਬਰ ਕਿਸਤਾਂ (₹2,000) ਵਿੱਚ ਮਿਲਦੇ ਹਨ।
• ਰਕਮ ਸਿੱਧੇ ਲਾਭਪਾਤਰੀ ਦੇ ਬੈਂਕ ਖਾਤੇ ਵਿੱਚ DBT ਰਾਹੀਂ ਭੇਜੀ ਜਾਂਦੀ ਹੈ।
• ਰਜਿਸਟ੍ਰੇਸ਼ਨ pmkisan.gov.in ਜਾਂ ਸੀਐਸਸੀ / ਰਾਜ ਖੇਤੀਬਾੜੀ ਦਫ਼ਤਰਾਂ ਵਿੱਚ।
• ਆਧਾਰ-ਲਿੰਕਡ ਬੈਂਕ ਖਾਤਾ ਲੋੜੀਂਦਾ ਹੈ।
• ਕੁਝ ਸ਼੍ਰੇਣੀਆਂ ਯੋਗ ਨਹੀਂ। ਯੋਗਤਾ ਅਧਿਕਾਰਤ ਪੋਰਟਲ ’ਤੇ ਜਾਂਚੋ।

ਸਰੋਤ: ਖੇਤੀਬਾੜੀ ਅਤੇ ਕਿਸਾਨ ਭਲਾਈ ਮੰਤਰਾਲਾ, ਭਾਰਤ ਸਰਕਾਰ।`,
        mr: `**पीएम-किसान (प्रधानमंत्री किसान सन्मान निधी)**

• पात्र जमीनधारक शेतकरी कुटुंबांना दरवर्षी ₹६,००० तीन समान हप्त्यांत (₹२,०००) दिले जातात।
• रक्कम थेट लाभार्थ्याच्या बँक खात्यात DBT द्वारे जमा होते।
• नोंदणी pmkisan.gov.in किंवा सीएससी / राज्य कृषी कार्यालयात।
• आधार-लिंक बँक खाते आवश्यक।
• काही वर्ग पात्र नाहीत। पात्रता अधिकृत पोर्टलवर तपासा।

स्रोत: कृषी व शेतकरी कल्याण मंत्रालय, भारत सरकार।`,
        ta: `**பிஎம்-கிசான் (பிரதமர் கிசான் சம்மன் நிதி)**

• தகுதியான நில உரிமையாளர் விவசாய குடும்பங்களுக்கு ஆண்டுக்கு ₹6,000 மூன்று சம தவணைகளில் (₹2,000) வழங்கப்படுகிறது.
• தொகை நேரடியாக பயனாளியின் வங்கிக் கணக்கில் DBT மூலம் செலுத்தப்படுகிறது.
• பதிவு pmkisan.gov.in அல்லது சிஎஸ்சி / மாநில விவசாய அலுவலகங்கள் மூலம்.
• ஆதார் இணைக்கப்பட்ட வங்கிக் கணக்கு அவசியம்.
• சில பிரிவுகள் தகுதியற்றவை. அதிகாரப்பூர்வ போர்டலில் சரிபார்க்கவும்.

மூலம்: வேளாண்மை மற்றும் விவசாயிகள் நல அமைச்சகம், இந்திய அரசு.`,
        te: `**పిఎం-కిసాన్ (ప్రధాన మంత్రి కిసాన్ సమ్మాన్ నిధి)**

• అర్హత ఉన్న భూమి యజమాని రైతు కుటుంబాలకు సంవత్సరానికి ₹6,000 మూడు సమాన వాయిదాలలో (₹2,000) ఇవ్వబడుతుంది.
• మొత్తం నేరుగా లబ్ధిదారు బ్యాంక్ ఖాతాకు DBT ద్వారా జమ చేయబడుతుంది.
• నమోదు pmkisan.gov.in లేదా సిఎస్‌సి / రాష్ట్ర వ్యవసాయ కార్యాలయాల ద్వారా.
• ఆధార్ లింక్ చేసిన బ్యాంక్ ఖాతా అవసరం.
• కొన్ని వర్గాలు అర్హత లేవు. అధికారిక పోర్టల్‌లో తనిఖీ చేయండి.

మూలం: వ్యవసాయం & రైతు సంక్షేమ మంత్రిత్వ శాఖ, భారత ప్రభుత్వం.`
      }
    },

    "pmfby": {
      id: "pmfby",
      icon: "🛡️",
      keywords: {
        en: ["pmfby", "crop insurance", "fasal bima", "insurance", "premium", "claim"],
        hi: ["पीएमएफबीवाई", "फसल बीमा", "प्रधानमंत्री फसल बीमा", "बीमा", "प्रीमियम"],
        pa: ["ਪੀਐਮਐਫਬੀਵਾਈ", "ਫਸਲ ਬੀਮਾ", "ਬੀਮਾ", "ਪ੍ਰੀਮੀਅਮ"],
        mr: ["पीएमएफबीवाय", "पीक विमा", "फसल बीमा"],
        ta: ["பிஎம்எஃப்பிஒய்", "பயிர் காப்பீடு", "காப்பீடு"],
        te: ["పిఎంఎఫ్బివై", "పంట బీమా", "బీమా"]
      },
      info: {
        en: `**Pradhan Mantri Fasal Bima Yojana (PMFBY)**

• Insurance coverage and financial support when crops fail due to natural calamities, pests or diseases.
• Farmer’s premium share is typically 1.5–2% for food & oilseed crops and 5% for commercial/horticultural crops.
• Remaining premium is shared by Central and State Governments.
• Enrolment through banks, CSCs or the national crop insurance portal.
• Claims settled on the basis of yield data and defined triggers.

Source: Ministry of Agriculture & Farmers Welfare / PMFBY guidelines.`,
        hi: `**प्रधानमंत्री फसल बीमा योजना (पीएमएफबीवाई)**

• प्राकृतिक आपदा, कीट या रोग से फसल नुकसान पर बीमा कवर और वित्तीय सहायता।
• किसान का प्रीमियम हिस्सा आमतौर पर खाद्य एवं तिलहन के लिए 1.5–2% और वाणिज्यिक/बागवानी के लिए 5%।
• शेष प्रीमियम केंद्र और राज्य सरकारें साझा करती हैं।
• नामांकन बैंक, सीएससी या राष्ट्रीय फसल बीमा पोर्टल से।
• दावे उपज डेटा और निर्धारित ट्रिगर्स पर आधारित।

स्रोत: कृषि एवं किसान कल्याण मंत्रालय / पीएमएफबीवाई दिशानिर्देश।`,
        pa: `**ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਫਸਲ ਬੀਮਾ ਯੋਜਨਾ (ਪੀਐਮਐਫਬੀਵਾਈ)**

• ਕੁਦਰਤੀ ਆਫ਼ਤ, ਕੀੜੇ ਜਾਂ ਬਿਮਾਰੀ ਕਾਰਨ ਫਸਲ ਨੁਕਸਾਨ ’ਤੇ ਬੀਮਾ ਕਵਰ ਅਤੇ ਵਿੱਤੀ ਸਹਾਇਤਾ।
• ਕਿਸਾਨ ਦਾ ਪ੍ਰੀਮੀਅਮ ਹਿੱਸਾ ਆਮ ਤੌਰ ’ਤੇ ਖਾਦ ਅਤੇ ਤੇਲ ਬੀਜਾਂ ਲਈ 1.5–2% ਅਤੇ ਵਪਾਰਕ/ਬਾਗਬਾਨੀ ਲਈ 5%।
• ਬਾਕੀ ਪ੍ਰੀਮੀਅਮ ਕੇਂਦਰ ਅਤੇ ਰਾਜ ਸਰਕਾਰਾਂ ਸਾਂਝਾ ਕਰਦੀਆਂ ਹਨ।
• ਨਾਮਜ਼ਦਗੀ ਬੈਂਕ, ਸੀਐਸਸੀ ਜਾਂ ਰਾਸ਼ਟਰੀ ਫਸਲ ਬੀਮਾ ਪੋਰਟਲ ਰਾਹੀਂ।

ਸਰੋਤ: ਖੇਤੀਬਾੜੀ ਅਤੇ ਕਿਸਾਨ ਭਲਾਈ ਮੰਤਰਾਲਾ।`,
        mr: `**प्रधानमंत्री फसल बीमा योजना (पीएमएफबीवाय)**

• नैसर्गिक आपत्ती, कीड किंवा रोगामुळे पीक नुकसान झाल्यास विमा संरक्षण आणि आर्थिक मदत।
• शेतकऱ्याचा प्रीमियम हिस्सा सामान्यतः अन्न व तेलबिया साठी १.५–२% आणि व्यावसायिक/बागायती साठी ५%।
• उर्वरित प्रीमियम केंद्र व राज्य सरकारे वाटतात।
• नोंदणी बँक, सीएससी किंवा राष्ट्रीय पीक विमा पोर्टलद्वारे।

स्रोत: कृषी व शेतकरी कल्याण मंत्रालय।`,
        ta: `**பிரதமர் பயிர் காப்பீட்டு திட்டம் (பிஎம்எஃப்பிஒய்)**

• இயற்கை பேரிடர், பூச்சி அல்லது நோய் காரணமாக பயிர் இழப்புக்கு காப்பீடு மற்றும் நிதி உதவி.
• விவசாயியின் பிரீமியம் பங்கு பொதுவாக உணவு & எண்ணெய் விதைகளுக்கு 1.5–2% மற்றும் வணிக/தோட்டக்கலைக்கு 5%.
• மீதமுள்ள பிரீமியம் மத்திய மற்றும் மாநில அரசுகள் பகிர்ந்து கொள்கின்றன.
• பதிவு வங்கிகள், சிஎஸ்சி அல்லது தேசிய பயிர் காப்பீட்டு போர்டல் மூலம்.

மூலம்: வேளாண்மை மற்றும் விவசாயிகள் நல அமைச்சகம்.`,
        te: `**ప్రధాన మంత్రి పంట బీమా యోజన (పిఎంఎఫ్బివై)**

• ప్రకృతి వైపరీత్యాలు, పురుగులు లేదా వ్యాధుల వల్ల పంట నష్టానికి బీమా కవరేజ్ మరియు ఆర్థిక సహాయం.
• రైతు ప్రీమియం వాటా సాధారణంగా ఆహార & నూనె గింజలకు 1.5–2% మరియు వాణిజ్య/హార్టికల్చర్‌కు 5%.
• మిగిలిన ప్రీమియం కేంద్ర మరియు రాష్ట్ర ప్రభుత్వాలు పంచుకుంటాయి.
• నమోదు బ్యాంకులు, సిఎస్‌సిలు లేదా జాతీయ పంట బీమా పోర్టల్ ద్వారా.

మూలం: వ్యవసాయం & రైతు సంక్షేమ మంత్రిత్వ శాఖ.`
      }
    },

    "soil-health": {
      id: "soil-health",
      icon: "🧪",
      keywords: {
        en: ["soil health", "soil card", "soil test", "shc", "nutrient", "fertiliser", "fertilizer"],
        hi: ["मिट्टी स्वास्थ्य", "मृदा स्वास्थ्य", "सॉइल कार्ड", "मिट्टी परीक्षण", "उर्वरक"],
        pa: ["ਮਿੱਟੀ ਸਿਹਤ", "ਮਿੱਟੀ ਕਾਰਡ", "ਮਿੱਟੀ ਟੈਸਟ", "ਉਰਵਰਕ"],
        mr: ["माती आरोग्य", "मृदा आरोग्य कार्ड", "माती चाचणी"],
        ta: ["மண் ஆரோக்கியம்", "மண் அட்டை", "மண் பரிசோதனை"],
        te: ["నేల ఆరోగ్యం", "నేల కార్డు", "నేల పరీక్ష"]
      },
      info: {
        en: `**Soil Health Card Scheme**

• Farmers receive a Soil Health Card with nutrient status and fertiliser dosage recommendations for their land.
• Soil samples are collected and tested at authorised laboratories.
• Cards are generally issued on a 2–3 year cycle.
• Helps optimise fertiliser use, improve productivity and reduce cultivation cost.
• Contact nearest Krishi Vigyan Kendra, agriculture office or the Soil Health Card portal.

Source: Department of Agriculture & Farmers Welfare.`,
        hi: `**मृदा स्वास्थ्य कार्ड योजना**

• किसानों को पोषक तत्व स्तर और उर्वरक मात्रा की सिफारिशों वाला मृदा स्वास्थ्य कार्ड मिलता है।
• मिट्टी के नमूने अधिकृत प्रयोगशालाओं में परीक्षण होते हैं।
• कार्ड आमतौर पर 2–3 वर्ष के चक्र में जारी होते हैं।
• उर्वरक उपयोग अनुकूल बनाने, उत्पादकता बढ़ाने और लागत कम करने में मदद।
• निकटतम कृषि विज्ञान केंद्र, कृषि कार्यालय या पोर्टल से संपर्क करें।

स्रोत: कृषि एवं किसान कल्याण विभाग।`,
        pa: `**ਮਿੱਟੀ ਸਿਹਤ ਕਾਰਡ ਯੋਜਨਾ**

• ਕਿਸਾਨਾਂ ਨੂੰ ਪੋਸ਼ਕ ਤੱਤ ਸਥਿਤੀ ਅਤੇ ਉਰਵਰਕ ਖੁਰਾਕ ਦੀਆਂ ਸਿਫ਼ਾਰਸ਼ਾਂ ਵਾਲਾ ਮਿੱਟੀ ਸਿਹਤ ਕਾਰਡ ਮਿਲਦਾ ਹੈ।
• ਮਿੱਟੀ ਦੇ ਨਮੂਨੇ ਅਧਿਕਾਰਤ ਪ੍ਰਯੋਗਸ਼ਾਲਾਵਾਂ ਵਿੱਚ ਟੈਸਟ ਹੁੰਦੇ ਹਨ।
• ਕਾਰਡ ਆਮ ਤੌਰ ’ਤੇ 2–3 ਸਾਲ ਦੇ ਚੱਕਰ ਵਿੱਚ ਜਾਰੀ ਹੁੰਦੇ ਹਨ।
• ਉਰਵਰਕ ਵਰਤੋਂ ਅਨੁਕੂਲ ਬਣਾਉਣ ਅਤੇ ਲਾਗਤ ਘਟਾਉਣ ਵਿੱਚ ਮਦਦ।

ਸਰੋਤ: ਖੇਤੀਬਾੜੀ ਅਤੇ ਕਿਸਾਨ ਭਲਾਈ ਵਿਭਾਗ।`,
        mr: `**मृदा आरोग्य कार्ड योजना**

• शेतकऱ्यांना पोषक तत्व स्थिती आणि खत शिफारशींसह मृदा आरोग्य कार्ड दिले जाते।
• मातीचे नमुने अधिकृत प्रयोगशाळांमध्ये तपासले जातात।
• कार्ड सामान्यतः दर २–३ वर्षांनी जारी केले जातात।
• खतांचा योग्य वापर आणि खर्च कमी करण्यास मदत।

स्रोत: कृषी व शेतकरी कल्याण विभाग।`,
        ta: `**மண் ஆரோக்கிய அட்டை திட்டம்**

• விவசாயிகளுக்கு ஊட்டச்சத்து நிலை மற்றும் உர அளவு பரிந்துரைகளுடன் மண் ஆரோக்கிய அட்டை வழங்கப்படுகிறது.
• மண் மாதிரிகள் அங்கீகரிக்கப்பட்ட ஆய்வகங்களில் பரிசோதிக்கப்படுகின்றன.
• அட்டைகள் பொதுவாக 2–3 ஆண்டு சுழற்சியில் வழங்கப்படுகின்றன.
• உர பயன்பாட்டை மேம்படுத்தவும் செலவைக் குறைக்கவும் உதவுகிறது.

மூலம்: வேளாண்மை மற்றும் விவசாயிகள் நலத்துறை.`,
        te: `**నేల ఆరోగ్య కార్డు పథకం**

• రైతులకు పోషక స్థితి మరియు ఎరువు మోతాదు సిఫార్సులతో నేల ఆరోగ్య కార్డు అందించబడుతుంది.
• నేల నమూనాలు అధికారిక ప్రయోగశాలల్లో పరీక్షించబడతాయి.
• కార్డులు సాధారణంగా 2–3 సంవత్సరాల చక్రంలో జారీ చేయబడతాయి.
• ఎరువుల వినియోగాన్ని మెరుగుపరచడం మరియు ఖర్చు తగ్గించడం సహాయపడుతుంది.

మూలం: వ్యవసాయం & రైతు సంక్షేమ విభాగం.`
      }
    },

    "kcc": {
      id: "kcc",
      icon: "🏦",
      keywords: {
        en: ["kcc", "kisan credit card", "credit card", "loan", "crop loan", "interest subvention"],
        hi: ["केसीसी", "किसान क्रेडिट कार्ड", "फसल ऋण", "ऋण", "ब्याज सब्सिडी"],
        pa: ["ਕੇਸੀਸੀ", "ਕਿਸਾਨ ਕ੍ਰੈਡਿਟ ਕਾਰਡ", "ਫਸਲ ਕਰਜ਼ਾ", "ਕਰਜ਼ਾ"],
        mr: ["केसीसी", "किसान क्रेडिट कार्ड", "पीक कर्ज"],
        ta: ["கேசிசி", "கிசான் கிரெடிட் கார்டு", "பயிர் கடன்"],
        te: ["కెసిసి", "కిసాన్ క్రెడిట్ కార్డు", "పంట రుణం"]
      },
      info: {
        en: `**Kisan Credit Card (KCC)**

• Short-term credit for cultivation and other needs (including post-harvest and consumption).
• Available through commercial banks, RRBs and cooperative banks.
• Interest subvention is available on timely repayment as per government guidelines.
• Personal accident insurance is often linked to KCC.
• Apply at your nearest bank branch or agriculture lending desk. Typical documents: land records, identity and address proof.

Source: Reserve Bank of India / Ministry of Agriculture guidelines.`,
        hi: `**किसान क्रेडिट कार्ड (केसीसी)**

• खेती और अन्य जरूरतों (कटाई के बाद और उपभोग सहित) के लिए अल्पकालिक ऋण।
• वाणिज्यिक बैंक, आरआरबी और सहकारी बैंकों के माध्यम से उपलब्ध।
• समय पर चुकौती पर ब्याज सब्सिडी सरकारी दिशानिर्देशों के अनुसार।
• कई मामलों में व्यक्तिगत दुर्घटना बीमा जुड़ा होता है।
• निकटतम बैंक शाखा में आवेदन करें। भूमि रिकॉर्ड, पहचान और पता प्रमाण आमतौर पर आवश्यक।

स्रोत: भारतीय रिजर्व बैंक / कृषि मंत्रालय दिशानिर्देश।`,
        pa: `**ਕਿਸਾਨ ਕ੍ਰੈਡਿਟ ਕਾਰਡ (ਕੇਸੀਸੀ)**

• ਖੇਤੀ ਅਤੇ ਹੋਰ ਲੋੜਾਂ ਲਈ ਛੋਟੀ ਮਿਆਦ ਦਾ ਕਰਜ਼ਾ।
• ਵਪਾਰਕ ਬੈਂਕ, ਆਰਆਰਬੀ ਅਤੇ ਸਹਿਕਾਰੀ ਬੈਂਕਾਂ ਰਾਹੀਂ ਉਪਲਬਧ।
• ਸਮੇਂ ਸਿਰ ਵਾਪਸੀ ’ਤੇ ਵਿਆਜ ਸਬਸਿਡੀ ਉਪਲਬਧ।
• ਅਕਸਰ ਨਿੱਜੀ ਦੁਰਘਟਨਾ ਬੀਮਾ ਜੁੜਿਆ ਹੁੰਦਾ ਹੈ।
• ਨਜ਼ਦੀਕੀ ਬੈਂਕ ਸ਼ਾਖਾ ਵਿੱਚ ਅਰਜ਼ੀ ਦਿਓ।

ਸਰੋਤ: ਰਿਜ਼ਰਵ ਬੈਂਕ ਆਫ਼ ਇੰਡੀਆ / ਖੇਤੀਬਾੜੀ ਮੰਤਰਾਲਾ।`,
        mr: `**किसान क्रेडिट कार्ड (केसीसी)**

• शेती आणि इतर गरजांसाठी अल्पमुदती कर्ज।
• व्यावसायिक बँका, आरआरबी आणि सहकारी बँकांद्वारे उपलब्ध।
• वेळेवर परतफेड केल्यास व्याज सबसिडी मिळते।
• अनेक प्रकरणांत वैयक्तिक अपघात विमाही जोडलेला असतो।
• जवळच्या बँक शाखेत अर्ज करा।

स्रोत: भारतीय रिझर्व्ह बँक / कृषी मंत्रालय।`,
        ta: `**கிசான் கிரெடிட் கார்டு (கேசிசி)**

• சாகுபடி மற்றும் பிற தேவைகளுக்கு குறுகிய கால கடன்.
• வணிக வங்கிகள், ஆர்பிபி மற்றும் கூட்டுறவு வங்கிகள் மூலம் கிடைக்கும்.
• சரியான நேரத்தில் திருப்பிச் செலுத்தினால் வட்டி மானியம்.
• பல வழக்குகளில் தனிப்பட்ட விபத்து காப்பீடும் இணைக்கப்பட்டுள்ளது.
• அருகிலுள்ள வங்கிக் கிளையில் விண்ணப்பிக்கவும்.

மூலம்: இந்திய ரிசர்வ் வங்கி / வேளாண்மை அமைச்சகம்.`,
        te: `**కిసాన్ క్రెడిట్ కార్డు (కెసిసి)**

• సాగు మరియు ఇతర అవసరాలకు స్వల్పకాలిక రుణం.
• వాణిజ్య బ్యాంకులు, ఆర్ఆర్‌బిలు మరియు సహకార బ్యాంకుల ద్వారా అందుబాటులో.
• సమయానికి తిరిగి చెల్లిస్తే వడ్డీ సబ్సిడీ.
• చాలా సందర్భాల్లో వ్యక్తిగత ప్రమాద బీమా కూడా లింక్ చేయబడి ఉంటుంది.
• సమీప బ్యాంక్ శాఖలో దరఖాస్తు చేయండి.

మూలం: రిజర్వ్ బ్యాంక్ ఆఫ్ ఇండియా / వ్యవసాయ మంత్రిత్వ శాఖ.`
      }
    },

    "pmksy": {
      id: "pmksy",
      icon: "💧",
      keywords: {
        en: ["pmksy", "krishi sinchayee", "irrigation", "per drop more crop", "micro irrigation", "water"],
        hi: ["पीएमकेएसवाई", "कृषि सिंचाई", "सिंचाई", "प्रति बूंद अधिक फसल", "माइक्रो इरिगेशन"],
        pa: ["ਪੀਐਮਕੇਐਸਵਾਈ", "ਕ੍ਰਿਸ਼ੀ ਸਿੰਚਾਈ", "ਸਿੰਚਾਈ", "ਪਾਣੀ"],
        mr: ["पीएमकेएसवाय", "कृषी सिंचन", "सिंचन", "सूक्ष्म सिंचन"],
        ta: ["பிஎம்கேஎஸ்ஒய்", "நீர்ப்பாசனம்", "நுண் நீர்ப்பாசனம்"],
        te: ["పిఎంకెఎస్వై", "నీటిపారుదల", "సూక్ష్మ నీటిపారుదల"]
      },
      info: {
        en: `**Pradhan Mantri Krishi Sinchayee Yojana (PMKSY)**

• Aims to expand cultivable area under assured irrigation and improve water-use efficiency (“Per Drop More Crop”).
• Components include Accelerated Irrigation Benefit Programme (AIBP), Har Khet Ko Pani, and micro-irrigation (drip/sprinkler).
• Farmers can access subsidies for micro-irrigation systems through state agriculture / horticulture departments.
• Focus on convergence with other schemes and water-saving technologies.
• Contact your state agriculture or irrigation department, or check the official PMKSY portal for current guidelines and application routes.

Source: Ministry of Agriculture & Farmers Welfare / Department of Water Resources (public scheme documents).`,
        hi: `**प्रधानमंत्री कृषि सिंचाई योजना (पीएमकेएसवाई)**

• सुनिश्चित सिंचाई के अंतर्गत कृषि योग्य क्षेत्र बढ़ाने और जल उपयोग दक्षता सुधारने का लक्ष्य (“प्रति बूंद अधिक फसल”)।
• घटकों में त्वरित सिंचाई लाभ कार्यक्रम (एआईबीपी), हर खेत को पानी, और माइक्रो-इरिगेशन (ड्रिप/स्प्रिंकलर) शामिल।
• किसान राज्य कृषि / बागवानी विभागों के माध्यम से माइक्रो-इरिगेशन पर सब्सिडी प्राप्त कर सकते हैं।
• अन्य योजनाओं और जल-बचत तकनीकों के साथ अभिसरण पर जोर।
• राज्य कृषि या सिंचाई विभाग से संपर्क करें या आधिकारिक पोर्टल देखें।

स्रोत: कृषि एवं किसान कल्याण मंत्रालय / जल संसाधन विभाग।`,
        pa: `**ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਕ੍ਰਿਸ਼ੀ ਸਿੰਚਾਈ ਯੋਜਨਾ (ਪੀਐਮਕੇਐਸਵਾਈ)**

• ਯਕੀਨੀ ਸਿੰਚਾਈ ਅਧੀਨ ਖੇਤੀਯੋਗ ਖੇਤਰ ਵਧਾਉਣ ਅਤੇ ਪਾਣੀ ਦੀ ਵਰਤੋਂ ਕੁਸ਼ਲਤਾ ਸੁਧਾਰਨਾ (“ਪ੍ਰਤੀ ਬੂੰਦ ਵੱਧ ਫਸਲ”)।
• ਘਟਕਾਂ ਵਿੱਚ ਐਕਸਲਰੇਟਿਡ ਇਰੀਗੇਸ਼ਨ ਬਿਨੀਫਿਟ ਪ੍ਰੋਗਰਾਮ, ਹਰ ਖੇਤ ਨੂੰ ਪਾਣੀ, ਅਤੇ ਮਾਈਕਰੋ-ਇਰੀਗੇਸ਼ਨ ਸ਼ਾਮਲ।
• ਕਿਸਾਨ ਰਾਜ ਖੇਤੀਬਾੜੀ / ਬਾਗਬਾਨੀ ਵਿਭਾਗਾਂ ਰਾਹੀਂ ਮਾਈਕਰੋ-ਇਰੀਗੇਸ਼ਨ ’ਤੇ ਸਬਸਿਡੀ ਲੈ ਸਕਦੇ ਹਨ।
• ਰਾਜ ਖੇਤੀਬਾੜੀ ਜਾਂ ਸਿੰਚਾਈ ਵਿਭਾਗ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।

ਸਰੋਤ: ਖੇਤੀਬਾੜੀ ਅਤੇ ਕਿਸਾਨ ਭਲਾਈ ਮੰਤਰਾਲਾ।`,
        mr: `**प्रधानमंत्री कृषी सिंचन योजना (पीएमकेएसवाय)**

• निश्चित सिंचनाखालील शेतीयोग्य क्षेत्र वाढवणे आणि पाण्याचा कार्यक्षम वापर (“प्रति थेंब अधिक पीक”)।
• घटकांमध्ये प्रवेगक सिंचन लाभ कार्यक्रम, हर खेत को पानी, आणि सूक्ष्म सिंचन (ड्रिप/स्प्रिंकलर) यांचा समावेश।
• शेतकरी राज्य कृषी / फलोत्पादन विभागांमार्फत सूक्ष्म सिंचनावर अनुदान मिळवू शकतात।
• राज्य कृषी किंवा सिंचन विभागाशी संपर्क साधा।

स्रोत: कृषी व शेतकरी कल्याण मंत्रालय।`,
        ta: `**பிரதமர் கிருஷி சிஞ்சாயீ யோஜனா (பிஎம்கேஎஸ்ஒய்)**

• உறுதியான நீர்ப்பாசனத்தின் கீழ் சாகுபடி பரப்பை விரிவுபடுத்துதல் மற்றும் நீர் பயன்பாட்டு திறனை மேம்படுத்துதல் (“ஒரு துளிக்கு அதிக பயிர்”).
• கூறுகளில் முடுக்கப்பட்ட நீர்ப்பாசன நன்மைத் திட்டம், ஒவ்வொரு வயலுக்கும் நீர், மற்றும் நுண் நீர்ப்பாசனம் (டிரிப்/ஸ்பிரிங்க்லர்) அடங்கும்.
• விவசாயிகள் மாநில வேளாண் / தோட்டக்கலை துறைகள் மூலம் நுண் நீர்ப்பாசன மானியம் பெறலாம்.
• மாநில வேளாண் அல்லது நீர்ப்பாசனத் துறையைத் தொடர்பு கொள்ளவும்.

மூலம்: வேளாண்மை மற்றும் விவசாயிகள் நல அமைச்சகம்.`,
        te: `**ప్రధాన మంత్రి కృషి సించాయీ యోజన (పిఎంకెఎస్వై)**

• నిర్ధారిత నీటిపారుదల కింద సాగు విస్తీర్ణాన్ని విస్తరించడం మరియు నీటి వినియోగ సామర్థ్యాన్ని మెరుగుపరచడం (“ఒక చుక్కకు ఎక్కువ పంట”).
• భాగాలలో యాక్సిలరేటెడ్ ఇరిగేషన్ బెనిఫిట్ ప్రోగ్రామ్, ప్రతి పొలానికి నీరు, మరియు సూక్ష్మ నీటిపారుదల (డ్రిప్/స్ప్రింక్లర్) ఉన్నాయి.
• రైతులు రాష్ట్ర వ్యవసాయ / ఉద్యాన విభాగాల ద్వారా సూక్ష్మ నీటిపారుదలపై సబ్సిడీ పొందవచ్చు.
• రాష్ట్ర వ్యవసాయ లేదా నీటిపారుదల శాఖను సంప్రదించండి.

మూలం: వ్యవసాయం & రైతు సంక్షేమ మంత్రిత్వ శాఖ.`
      }
    }
  }
};

/* ============================================
   SYSTEM PROMPT (shown in Inspector)
   ============================================ */
const SYSTEM_PROMPT = `You are Kisaan Sahayak, an AI assistant that helps Indian farmers understand central government agricultural schemes.

STRICT RULES:
1. Answer ONLY from the verified knowledge base of official schemes: PM-KISAN, PMFBY, Soil Health Card, Kisan Credit Card (KCC), and PMKSY.
2. If the user asks about anything outside this verified set (market prices, weather forecasts, unofficial rumors, pesticide dosages, legal advice, etc.), you MUST refuse with the mandatory fallback response. Do not invent, guess, or extrapolate.
3. Always state the source department when giving scheme information.
4. Prefer clear, short sentences suitable for outdoor reading and text-to-speech.
5. Respond in the language selected by the user.`;

const VERIFIED_SOURCES = [
  "Ministry of Agriculture & Farmers Welfare – PM-KISAN guidelines (pmkisan.gov.in)",
  "Ministry of Agriculture & Farmers Welfare – PMFBY operational guidelines",
  "Department of Agriculture & Farmers Welfare – Soil Health Card scheme documentation",
  "Reserve Bank of India – Kisan Credit Card scheme circulars",
  "Ministry of Agriculture & Farmers Welfare / DoWR – PMKSY scheme documents"
];

/* ============================================
   UI STRINGS (6 languages)
   ============================================ */
const UI = {
  en: {
    title: "Kisaan Sahayak",
    tagline: "AI Farmer Assistance",
    langLabel: "Language",
    contrastLabel: "Sun",
    schemesHeading: "Popular Schemes",
    guardrailHeading: "Test Guardrail & Fallback",
    guardrailDesc: "Try an unverified query to see the mandatory anti-hallucination response.",
    inspectorBtn: "Prompt & Sources Inspector",
    chatHeading: "Ask the Assistant",
    chatSub: "Verified information only • No guesses",
    sourceBadge: "Verified sources",
    placeholder: "Ask about PM-KISAN, insurance, soil health, irrigation…",
    disclaimer: "Answers are drawn only from verified government scheme information. For official decisions always check the concerned department portal.",
    footer: "Inspired by PM-KISAN & Digital India initiatives • For educational demonstration",
    welcome: "Namaste! I am your Kisaan Sahayak assistant.\n\nI explain verified information about major central schemes: PM-KISAN, crop insurance (PMFBY), Soil Health Card, Kisan Credit Card, and PMKSY (irrigation).\n\nAsk in simple language. If I do not have verified information, I will clearly say so — I never guess.",
    fallback: "I do not have verified information on this topic in my knowledge base.\n\nI am only allowed to share confirmed details about official schemes (PM-KISAN, PMFBY, Soil Health Card, KCC, PMKSY).\n\nPlease consult the official government portal or your nearest agriculture office / Common Service Centre for accurate guidance. Do not rely on unverified rumors or predictions.",
    botLabel: "Kisaan Sahayak",
    listen: "Listen",
    stop: "Stop",
    modalTitle: "Prompt & Sources Inspector",
    schemeNames: {
      "pm-kisan": "PM-KISAN",
      "pmfby": "Crop Insurance",
      "soil-health": "Soil Health",
      "kcc": "Kisan Credit",
      "pmksy": "PMKSY Irrigation"
    },
    guardrailQueries: [
      { label: "Tomorrow’s onion price?", query: "What will be the onion market price tomorrow?" },
      { label: "Best pesticide for my crop?", query: "Which pesticide should I spray for better yield?" },
      { label: "Will it rain next week?", query: "Will it rain in my village next week?" }
    ]
  },
  hi: {
    title: "किसान सहायक",
    tagline: "एआई किसान सहायता",
    langLabel: "भाषा",
    contrastLabel: "सूरज",
    schemesHeading: "लोकप्रिय योजनाएँ",
    guardrailHeading: "गार्डरेल और फॉलबैक जाँच",
    guardrailDesc: "असत्यापित प्रश्न आज़माएँ और अनिवार्य एंटी-हैलुसिनेशन उत्तर देखें।",
    inspectorBtn: "प्रॉम्प्ट और स्रोत निरीक्षक",
    chatHeading: "सहायक से पूछें",
    chatSub: "केवल सत्यापित जानकारी • कोई अनुमान नहीं",
    sourceBadge: "सत्यापित स्रोत",
    placeholder: "पीएम-किसान, बीमा, मिट्टी स्वास्थ्य, सिंचाई के बारे में पूछें…",
    disclaimer: "उत्तर केवल सत्यापित सरकारी योजना जानकारी से। आधिकारिक निर्णय के लिए संबंधित विभाग के पोर्टल की जाँच करें।",
    footer: "पीएम-किसान और डिजिटल इंडिया से प्रेरित • शैक्षिक प्रदर्शन",
    welcome: "नमस्ते! मैं आपका किसान सहायक हूँ।\n\nमैं पीएम-किसान, फसल बीमा, मृदा स्वास्थ्य कार्ड, किसान क्रेडिट कार्ड और पीएमकेएसवाई जैसी योजनाओं की सत्यापित जानकारी बताता हूँ।\n\nसरल भाषा में पूछें। सत्यापित जानकारी न होने पर मैं स्पष्ट कहूँगा — अनुमान नहीं लगाता।",
    fallback: "इस विषय पर मेरे ज्ञान आधार में सत्यापित जानकारी उपलब्ध नहीं है।\n\nमुझे केवल आधिकारिक योजनाओं (पीएम-किसान, पीएमएफबीवाई, मृदा स्वास्थ्य कार्ड, केसीसी, पीएमकेएसवाई) की पुष्टि की गई जानकारी साझा करने की अनुमति है।\n\nसटीक मार्गदर्शन के लिए आधिकारिक पोर्टल या निकटतम कृषि कार्यालय / सीएससी से संपर्क करें।",
    botLabel: "किसान सहायक",
    listen: "सुनें",
    stop: "रोकें",
    modalTitle: "प्रॉम्प्ट और स्रोत निरीक्षक",
    schemeNames: {
      "pm-kisan": "पीएम-किसान",
      "pmfby": "फसल बीमा",
      "soil-health": "मिट्टी स्वास्थ्य",
      "kcc": "किसान क्रेडिट",
      "pmksy": "पीएमकेएसवाई सिंचाई"
    },
    guardrailQueries: [
      { label: "कल प्याज का भाव?", query: "कल प्याज का बाजार भाव क्या होगा?" },
      { label: "सबसे अच्छी दवा?", query: "अच्छी उपज के लिए कौन सी दवा छिड़कूँ?" },
      { label: "अगले हफ्ते बारिश?", query: "अगले हफ्ते मेरे गाँव में बारिश होगी?" }
    ]
  },
  pa: {
    title: "ਕਿਸਾਨ ਸਹਾਇਕ",
    tagline: "ਏਆਈ ਕਿਸਾਨ ਸਹਾਇਤਾ",
    langLabel: "ਭਾਸ਼ਾ",
    contrastLabel: "ਸੂਰਜ",
    schemesHeading: "ਪ੍ਰਸਿੱਧ ਯੋਜਨਾਵਾਂ",
    guardrailHeading: "ਗਾਰਡਰੇਲ ਅਤੇ ਫਾਲਬੈਕ ਜਾਂਚ",
    guardrailDesc: "ਅਣਪ੍ਰਮਾਣਿਤ ਸਵਾਲ ਅਜ਼ਮਾਓ ਅਤੇ ਲਾਜ਼ਮੀ ਐਂਟੀ-ਹੈਲੂਸੀਨੇਸ਼ਨ ਜਵਾਬ ਵੇਖੋ।",
    inspectorBtn: "ਪ੍ਰੌਂਪਟ ਅਤੇ ਸਰੋਤ ਇੰਸਪੈਕਟਰ",
    chatHeading: "ਸਹਾਇਕ ਨੂੰ ਪੁੱਛੋ",
    chatSub: "ਸਿਰਫ਼ ਪ੍ਰਮਾਣਿਤ ਜਾਣਕਾਰੀ • ਕੋਈ ਅਨੁਮਾਨ ਨਹੀਂ",
    sourceBadge: "ਪ੍ਰਮਾਣਿਤ ਸਰੋਤ",
    placeholder: "ਪੀਐਮ-ਕਿਸਾਨ, ਬੀਮਾ, ਮਿੱਟੀ ਸਿਹਤ, ਸਿੰਚਾਈ ਬਾਰੇ ਪੁੱਛੋ…",
    disclaimer: "ਜਵਾਬ ਸਿਰਫ਼ ਪ੍ਰਮਾਣਿਤ ਸਰਕਾਰੀ ਯੋਜਨਾ ਜਾਣਕਾਰੀ ਤੋਂ। ਅਧਿਕਾਰਤ ਫੈਸਲੇ ਲਈ ਸਬੰਧਤ ਵਿਭਾਗ ਦਾ ਪੋਰਟਲ ਚੈੱਕ ਕਰੋ।",
    footer: "ਪੀਐਮ-ਕਿਸਾਨ ਅਤੇ ਡਿਜੀਟਲ ਇੰਡੀਆ ਤੋਂ ਪ੍ਰੇਰਿਤ • ਵਿਦਿਅਕ ਪ੍ਰਦਰਸ਼ਨ",
    welcome: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਤੁਹਾਡਾ ਕਿਸਾਨ ਸਹਾਇਕ ਹਾਂ।\n\nਮੈਂ ਪੀਐਮ-ਕਿਸਾਨ, ਫਸਲ ਬੀਮਾ, ਮਿੱਟੀ ਸਿਹਤ ਕਾਰਡ, ਕਿਸਾਨ ਕ੍ਰੈਡਿਟ ਕਾਰਡ ਅਤੇ ਪੀਐਮਕੇਐਸਵਾਈ ਬਾਰੇ ਪ੍ਰਮਾਣਿਤ ਜਾਣਕਾਰੀ ਦੱਸਦਾ ਹਾਂ।\n\nਸਰਲ ਭਾਸ਼ਾ ਵਿੱਚ ਪੁੱਛੋ। ਜਾਣਕਾਰੀ ਨਾ ਹੋਣ ’ਤੇ ਮੈਂ ਸਾਫ਼ ਦੱਸਾਂਗਾ।",
    fallback: "ਇਸ ਵਿਸ਼ੇ ’ਤੇ ਮੇਰੇ ਗਿਆਨ ਆਧਾਰ ਵਿੱਚ ਪ੍ਰਮਾਣਿਤ ਜਾਣਕਾਰੀ ਉਪਲਬਧ ਨਹੀਂ।\n\nਮੈਨੂੰ ਸਿਰਫ਼ ਅਧਿਕਾਰਤ ਯੋਜਨਾਵਾਂ ਦੀ ਪੁਸ਼ਟੀਸ਼ੁਦਾ ਜਾਣਕਾਰੀ ਸਾਂਝੀ ਕਰਨ ਦੀ ਇਜਾਜ਼ਤ ਹੈ।\n\nਸਹੀ ਮਾਰਗਦਰਸ਼ਨ ਲਈ ਅਧਿਕਾਰਤ ਪੋਰਟਲ ਜਾਂ ਨਜ਼ਦੀਕੀ ਖੇਤੀਬਾੜੀ ਦਫ਼ਤਰ ਨਾਲ ਸੰਪਰਕ ਕਰੋ।",
    botLabel: "ਕਿਸਾਨ ਸਹਾਇਕ",
    listen: "ਸੁਣੋ",
    stop: "ਰੋਕੋ",
    modalTitle: "ਪ੍ਰੌਂਪਟ ਅਤੇ ਸਰੋਤ ਇੰਸਪੈਕਟਰ",
    schemeNames: {
      "pm-kisan": "ਪੀਐਮ-ਕਿਸਾਨ",
      "pmfby": "ਫਸਲ ਬੀਮਾ",
      "soil-health": "ਮਿੱਟੀ ਸਿਹਤ",
      "kcc": "ਕਿਸਾਨ ਕ੍ਰੈਡਿਟ",
      "pmksy": "ਪੀਐਮਕੇਐਸਵਾਈ ਸਿੰਚਾਈ"
    },
    guardrailQueries: [
      { label: "ਕੱਲ੍ਹ ਪਿਆਜ਼ ਦਾ ਭਾਅ?", query: "ਕੱਲ੍ਹ ਪਿਆਜ਼ ਦਾ ਬਾਜ਼ਾਰ ਭਾਅ ਕੀ ਹੋਵੇਗਾ?" },
      { label: "ਸਭ ਤੋਂ ਵਧੀਆ ਦਵਾਈ?", query: "ਚੰਗੀ ਪੈਦਾਵਾਰ ਲਈ ਕਿਹੜੀ ਦਵਾਈ ਛਿੜਕਾਂ?" },
      { label: "ਅਗਲੇ ਹਫ਼ਤੇ ਮੀਂਹ?", query: "ਅਗਲੇ ਹਫ਼ਤੇ ਮੇਰੇ ਪਿੰਡ ਵਿੱਚ ਮੀਂਹ ਪਵੇਗਾ?" }
    ]
  },
  mr: {
    title: "किसान सहायक",
    tagline: "एआय शेतकरी सहाय्य",
    langLabel: "भाषा",
    contrastLabel: "सूर्य",
    schemesHeading: "लोकप्रिय योजना",
    guardrailHeading: "गार्डरेल आणि फॉलबॅक तपासणी",
    guardrailDesc: "असत्यापित प्रश्न वापरून अनिवार्य अँटी-हॅल्युसिनेशन उत्तर पहा।",
    inspectorBtn: "प्रॉम्प्ट आणि स्रोत निरीक्षक",
    chatHeading: "सहाय्यकाला विचारा",
    chatSub: "फक्त सत्यापित माहिती • अंदाज नाही",
    sourceBadge: "सत्यापित स्रोत",
    placeholder: "पीएम-किसान, विमा, माती आरोग्य, सिंचन बद्दल विचारा…",
    disclaimer: "उत्तरे फक्त सत्यापित सरकारी योजना माहितीवरून। अधिकृत निर्णयासाठी संबंधित विभागाचे पोर्टल तपासा।",
    footer: "पीएम-किसान आणि डिजिटल इंडियावरून प्रेरित • शैक्षणिक प्रात्यक्षिक",
    welcome: "नमस्कार! मी तुमचा किसान सहायक आहे।\n\nमी पीएम-किसान, पीक विमा, मृदा आरोग्य कार्ड, किसान क्रेडिट कार्ड आणि पीएमकेएसवाय यांची सत्यापित माहिती सांगतो।\n\nसोप्या भाषेत विचारा। माहिती नसल्यास मी स्पष्ट सांगेन।",
    fallback: "या विषयावर माझ्या ज्ञान आधारात सत्यापित माहिती उपलब्ध नाही।\n\nमला फक्त अधिकृत योजनांची पुष्टी केलेली माहिती सांगण्याची परवानगी आहे।\n\nअचूक मार्गदर्शनासाठी अधिकृत पोर्टल किंवा जवळच्या कृषी कार्यालयाशी संपर्क साधा।",
    botLabel: "किसान सहायक",
    listen: "ऐका",
    stop: "थांबा",
    modalTitle: "प्रॉम्प्ट आणि स्रोत निरीक्षक",
    schemeNames: {
      "pm-kisan": "पीएम-किसान",
      "pmfby": "पीक विमा",
      "soil-health": "माती आरोग्य",
      "kcc": "किसान क्रेडिट",
      "pmksy": "पीएमकेएसवाय सिंचन"
    },
    guardrailQueries: [
      { label: "उद्या कांदा भाव?", query: "उद्या कांद्याचा बाजार भाव काय असेल?" },
      { label: "सर्वोत्तम कीटकनाशक?", query: "चांगल्या उत्पन्नासाठी कोणते कीटकनाशक फवारावे?" },
      { label: "पुढच्या आठवड्यात पाऊस?", query: "पुढच्या आठवड्यात माझ्या गावात पाऊस पडेल का?" }
    ]
  },
  ta: {
    title: "கிசான் சகாயக்",
    tagline: "ஏஐ விவசாயி உதவி",
    langLabel: "மொழி",
    contrastLabel: "சூரியன்",
    schemesHeading: "பிரபலமான திட்டங்கள்",
    guardrailHeading: "கார்ட்ரெயில் & ஃபால்பேக் சோதனை",
    guardrailDesc: "சரிபார்க்கப்படாத கேள்வியை முயற்சித்து கட்டாய ஆன்டி-ஹலூசினேஷன் பதிலைப் பாருங்கள்.",
    inspectorBtn: "ப்ராம்ப்ட் & மூலங்கள் இன்ஸ்பெக்டர்",
    chatHeading: "உதவியாளரிடம் கேளுங்கள்",
    chatSub: "சரிபார்க்கப்பட்ட தகவல் மட்டும் • யூகம் இல்லை",
    sourceBadge: "சரிபார்க்கப்பட்ட மூலங்கள்",
    placeholder: "பிஎம்-கிசான், காப்பீடு, மண் ஆரோக்கியம், நீர்ப்பாசனம் பற்றி கேளுங்கள்…",
    disclaimer: "பதில்கள் சரிபார்க்கப்பட்ட அரசு திட்ட தகவல்களில் இருந்து மட்டுமே. அதிகாரப்பூர்வ முடிவுகளுக்கு தொடர்புடைய துறை போர்டலை சரிபார்க்கவும்.",
    footer: "பிஎம்-கிசான் & டிஜிட்டல் இந்தியா முயற்சிகளால் ஈர்க்கப்பட்டது • கல்வி விளக்கம்",
    welcome: "வணக்கம்! நான் உங்கள் கிசான் சகாயக் உதவியாளர்.\n\nபிஎம்-கிசான், பயிர் காப்பீடு, மண் ஆரோக்கிய அட்டை, கிசான் கிரெடிட் கார்டு மற்றும் பிஎம்கேஎஸ்ஒய் பற்றிய சரிபார்க்கப்பட்ட தகவலை விளக்குகிறேன்.\n\nஎளிய மொழியில் கேளுங்கள். தகவல் இல்லையென்றால் தெளிவாக சொல்வேன்.",
    fallback: "இந்த தலைப்பில் எனது அறிவுத் தளத்தில் சரிபார்க்கப்பட்ட தகவல் இல்லை.\n\nஅதிகாரப்பூர்வ திட்டங்களின் உறுதிப்படுத்தப்பட்ட தகவலை மட்டுமே பகிர எனக்கு அனுமதி உண்டு.\n\nதுல்லியமான வழிகாட்டுதலுக்கு அதிகாரப்பூர்வ போர்டல் அல்லது அருகிலுள்ள வேளாண் அலுவலகத்தை அணுகவும்.",
    botLabel: "கிசான் சகாயக்",
    listen: "கேளுங்கள்",
    stop: "நிறுத்து",
    modalTitle: "ப்ராம்ப்ட் & மூலங்கள் இன்ஸ்பெக்டர்",
    schemeNames: {
      "pm-kisan": "பிஎம்-கிசான்",
      "pmfby": "பயிர் காப்பீடு",
      "soil-health": "மண் ஆரோக்கியம்",
      "kcc": "கிசான் கிரெடிட்",
      "pmksy": "பிஎம்கேஎஸ்ஒய் நீர்ப்பாசனம்"
    },
    guardrailQueries: [
      { label: "நாளை வெங்காய விலை?", query: "நாளை வெங்காய சந்தை விலை என்னவாக இருக்கும்?" },
      { label: "சிறந்த பூச்சிக்கொல்லி?", query: "நல்ல மகசூலுக்கு எந்த பூச்சிக்கொல்லியை தெளிக்க வேண்டும்?" },
      { label: "அடுத்த வாரம் மழை?", query: "அடுத்த வாரம் என் கிராமத்தில் மழை பெய்யுமா?" }
    ]
  },
  te: {
    title: "కిసాన్ సహాయక్",
    tagline: "ఏఐ రైతు సహాయం",
    langLabel: "భాష",
    contrastLabel: "సూర్యుడు",
    schemesHeading: "జనాదరణ పొందిన పథకాలు",
    guardrailHeading: "గార్డ్‌రైల్ & ఫాల్‌బ్యాక్ పరీక్ష",
    guardrailDesc: "ధృవీకరించని ప్రశ్నను ప్రయత్నించి తప్పనిసరి యాంటీ-హాలూసినేషన్ సమాధానాన్ని చూడండి.",
    inspectorBtn: "ప్రాంప్ట్ & మూలాల ఇన్‌స్పెక్టర్",
    chatHeading: "సహాయకుడిని అడగండి",
    chatSub: "ధృవీకరించిన సమాచారం మాత్రమే • ఊహలు లేవు",
    sourceBadge: "ధృవీకరించిన మూలాలు",
    placeholder: "పిఎం-కిసాన్, బీమా, నేల ఆరోగ్యం, నీటిపారుదల గురించి అడగండి…",
    disclaimer: "సమాధానాలు ధృవీకరించిన ప్రభుత్వ పథక సమాచారం నుండి మాత్రమే. అధికారిక నిర్ణయాల కోసం సంబంధిత విభాగం పోర్టల్‌ను తనిఖీ చేయండి.",
    footer: "పిఎం-కిసాన్ & డిజిటల్ ఇండియా చొరవల నుండి ప్రేరణ • విద్యా ప్రదర్శన",
    welcome: "నమస్కారం! నేను మీ కిసాన్ సహాయక్ సహాయకుడిని.\n\nపిఎం-కిసాన్, పంట బీమా, నేల ఆరోగ్య కార్డు, కిసాన్ క్రెడిట్ కార్డు మరియు పిఎంకెఎస్వై గురించి ధృవీకరించిన సమాచారాన్ని వివరిస్తాను.\n\nసరళమైన భాషలో అడగండి. సమాచారం లేకపోతే స్పష్టంగా చెప్తాను.",
    fallback: "ఈ అంశంపై నా జ్ఞాన ఆధారంలో ధృవీకరించిన సమాచారం అందుబాటులో లేదు.\n\nఅధికారిక పథకాల ధృవీకరించిన వివరాలను మాత్రమే పంచుకోవడానికి నాకు అనుమతి ఉంది.\n\nఖచ్చితమైన మార్గదర్శకత్వం కోసం అధికారిక పోర్టల్ లేదా సమీప వ్యవసాయ కార్యాలయాన్ని సంప్రదించండి.",
    botLabel: "కిసాన్ సహాయక్",
    listen: "వినండి",
    stop: "ఆపు",
    modalTitle: "ప్రాంప్ట్ & మూలాల ఇన్‌స్పెక్టర్",
    schemeNames: {
      "pm-kisan": "పిఎం-కిసాన్",
      "pmfby": "పంట బీమా",
      "soil-health": "నేల ఆరోగ్యం",
      "kcc": "కిసాన్ క్రెడిట్",
      "pmksy": "పిఎంకెఎస్వై నీటిపారుదల"
    },
    guardrailQueries: [
      { label: "రేపు ఉల్లి ధర?", query: "రేపు ఉల్లి మార్కెట్ ధర ఎంత ఉంటుంది?" },
      { label: "ఉత్తమ పురుగుమందు?", query: "మంచి దిగుబడికి ఏ పురుగుమందు చల్లాలి?" },
      { label: "వచ్చే వారం వర్షం?", query: "వచ్చే వారం నా ఊరిలో వర్షం పడుతుందా?" }
    ]
  }
};

/* ============================================
   STATE
   ============================================ */
let currentLang = "en";
let recognition = null;
let isListening = false;
let currentUtterance = null;

/* ============================================
   DOM
   ============================================ */
const chatContainer = document.getElementById("chat-container");
const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const langSelect = document.getElementById("lang-select");
const schemeChipsEl = document.getElementById("scheme-chips");
const guardrailActionsEl = document.getElementById("guardrail-actions");
const contrastToggle = document.getElementById("contrast-toggle");
const micBtn = document.getElementById("mic-btn");
const inspectorBtn = document.getElementById("inspector-btn");
const inspectorModal = document.getElementById("inspector-modal");
const modalClose = document.getElementById("modal-close");
const modalBackdrop = document.getElementById("modal-backdrop");
const modalBody = document.getElementById("modal-body");

/* ============================================
   HELPERS
   ============================================ */
function getUI() {
  return UI[currentLang] || UI.en;
}

function scrollToBottom() {
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function stripMarkdown(text) {
  return text.replace(/\*\*(.*?)\*\*/g, "$1").replace(/<br\s*\/?>/gi, "\n");
}

function formatBubbleHtml(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br>");
}

/* ============================================
   TTS (Listen button on every bot message)
   ============================================ */
function speakText(text, btn) {
  if (!window.speechSynthesis) return;

  if (currentUtterance && speechSynthesis.speaking) {
    speechSynthesis.cancel();
    document.querySelectorAll(".listen-btn.speaking").forEach((b) => {
      b.classList.remove("speaking");
      b.textContent = "🔊 " + getUI().listen;
    });
    if (btn && btn.classList.contains("speaking")) return;
  }

  const clean = stripMarkdown(text);
  const utt = new SpeechSynthesisUtterance(clean);
  const langMap = { en: "en-IN", hi: "hi-IN", pa: "pa-IN", mr: "mr-IN", ta: "ta-IN", te: "te-IN" };
  utt.lang = langMap[currentLang] || "en-IN";
  utt.rate = 0.95;

  utt.onstart = () => {
    if (btn) {
      btn.classList.add("speaking");
      btn.textContent = "⏹ " + getUI().stop;
    }
  };
  utt.onend = utt.onerror = () => {
    if (btn) {
      btn.classList.remove("speaking");
      btn.textContent = "🔊 " + getUI().listen;
    }
    currentUtterance = null;
  };

  currentUtterance = utt;
  speechSynthesis.speak(utt);
}

/* ============================================
   VOICE INPUT (Web Speech API)
   ============================================ */
function initSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    micBtn.style.display = "none";
    return;
  }

  recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  const langMap = { en: "en-IN", hi: "hi-IN", pa: "pa-IN", mr: "mr-IN", ta: "ta-IN", te: "te-IN" };
  recognition.lang = langMap[currentLang] || "en-IN";

  recognition.onstart = () => {
    isListening = true;
    micBtn.classList.add("listening");
    micBtn.setAttribute("aria-label", "Listening… tap to stop");
  };

  recognition.onend = () => {
    isListening = false;
    micBtn.classList.remove("listening");
    micBtn.setAttribute("aria-label", "Voice input");
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    userInput.value = transcript;
    userInput.dispatchEvent(new Event("input"));
    handleUserMessage(transcript);
  };

  recognition.onerror = () => {
    isListening = false;
    micBtn.classList.remove("listening");
  };
}

function toggleMic() {
  if (!recognition) return;
  if (isListening) {
    recognition.stop();
  } else {
    const langMap = { en: "en-IN", hi: "hi-IN", pa: "pa-IN", mr: "mr-IN", ta: "ta-IN", te: "te-IN" };
    recognition.lang = langMap[currentLang] || "en-IN";
    try {
      recognition.start();
    } catch (e) {
      /* already started */
    }
  }
}

/* ============================================
   MESSAGE RENDERING
   ============================================ */
function createBotMessage(text) {
  const msg = document.createElement("div");
  msg.className = "message bot";

  const meta = document.createElement("div");
  meta.className = "bot-meta";

  const label = document.createElement("span");
  label.className = "bot-label";
  label.textContent = "🌾 " + getUI().botLabel;
  meta.appendChild(label);

  const listenBtn = document.createElement("button");
  listenBtn.type = "button";
  listenBtn.className = "listen-btn";
  listenBtn.textContent = "🔊 " + getUI().listen;
  listenBtn.setAttribute("aria-label", getUI().listen);
  listenBtn.addEventListener("click", () => speakText(text, listenBtn));
  meta.appendChild(listenBtn);

  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.innerHTML = formatBubbleHtml(text);

  msg.appendChild(meta);
  msg.appendChild(bubble);
  return msg;
}

function createUserMessage(text) {
  const msg = document.createElement("div");
  msg.className = "message user";
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = text;
  msg.appendChild(bubble);
  return msg;
}

function showTyping() {
  const msg = document.createElement("div");
  msg.className = "message bot typing";
  msg.id = "typing-indicator";
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  const dots = document.createElement("div");
  dots.className = "typing-dots";
  dots.innerHTML = "<span></span><span></span><span></span>";
  bubble.appendChild(dots);
  msg.appendChild(bubble);
  chatContainer.appendChild(msg);
  scrollToBottom();
}

function hideTyping() {
  const el = document.getElementById("typing-indicator");
  if (el) el.remove();
}

function addMessage(text, type) {
  const el = type === "bot" ? createBotMessage(text) : createUserMessage(text);
  chatContainer.appendChild(el);
  scrollToBottom();
}

/* ============================================
   CORE ASSISTANT – verified sources only
   ============================================ */
function findMatchingScheme(query) {
  const q = query.toLowerCase().trim();
  if (!q) return null;

  for (const scheme of Object.values(KNOWLEDGE.schemes)) {
    const keys = scheme.keywords[currentLang] || scheme.keywords.en;
    for (const kw of keys) {
      if (q.includes(kw.toLowerCase())) return scheme;
    }
    if (currentLang !== "en") {
      for (const kw of scheme.keywords.en) {
        if (q.includes(kw.toLowerCase())) return scheme;
      }
    }
  }
  return null;
}

function generateResponse(query) {
  const scheme = findMatchingScheme(query);
  if (scheme) {
    return scheme.info[currentLang] || scheme.info.en;
  }
  // Mandatory fallback – never invent
  return getUI().fallback;
}

function handleUserMessage(text) {
  const trimmed = (text || "").trim();
  if (!trimmed) return;

  addMessage(trimmed, "user");
  userInput.value = "";
  userInput.style.height = "auto";
  sendBtn.disabled = true;

  showTyping();

  setTimeout(() => {
    hideTyping();
    const reply = generateResponse(trimmed);
    addMessage(reply, "bot");
    sendBtn.disabled = false;
    userInput.focus();
  }, 550 + Math.random() * 350);
}

/* ============================================
   UI UPDATES
   ============================================ */
function updateUIForLanguage() {
  const ui = getUI();
  document.getElementById("app-title").textContent = ui.title;
  document.getElementById("app-tagline").textContent = ui.tagline;
  document.getElementById("lang-label").textContent = ui.langLabel;
  document.getElementById("contrast-label").textContent = ui.contrastLabel;
  document.getElementById("schemes-heading").textContent = ui.schemesHeading;
  document.getElementById("guardrail-heading").textContent = ui.guardrailHeading;
  document.getElementById("guardrail-desc").textContent = ui.guardrailDesc;
  document.getElementById("inspector-btn-label").textContent = ui.inspectorBtn;
  document.getElementById("chat-heading").textContent = ui.chatHeading;
  document.getElementById("chat-sub").textContent = ui.chatSub;
  document.getElementById("source-badge-text").textContent = ui.sourceBadge;
  userInput.placeholder = ui.placeholder;
  document.getElementById("disclaimer").textContent = ui.disclaimer;
  document.getElementById("footer-text").textContent = ui.footer;
  document.getElementById("modal-title").textContent = ui.modalTitle;

  document.documentElement.lang =
    currentLang === "hi" ? "hi" :
    currentLang === "pa" ? "pa" :
    currentLang === "mr" ? "mr" :
    currentLang === "ta" ? "ta" :
    currentLang === "te" ? "te" : "en";

  renderSchemeChips();
  renderGuardrailButtons();
  chatContainer.innerHTML = "";
  addMessage(ui.welcome, "bot");
}

function renderSchemeChips() {
  schemeChipsEl.innerHTML = "";
  const names = getUI().schemeNames;

  for (const scheme of Object.values(KNOWLEDGE.schemes)) {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "scheme-chip";
    chip.setAttribute("role", "listitem");
    chip.setAttribute("aria-label", names[scheme.id]);
    chip.innerHTML = `<span class="chip-icon">${scheme.icon}</span><span>${names[scheme.id]}</span>`;

    chip.addEventListener("click", () => {
      const prompts = {
        en: `Tell me about ${names[scheme.id]}`,
        hi: `${names[scheme.id]} के बारे में बताओ`,
        pa: `${names[scheme.id]} ਬਾਰੇ ਦੱਸੋ`,
        mr: `${names[scheme.id]} बद्दल सांगा`,
        ta: `${names[scheme.id]} பற்றி சொல்லுங்கள்`,
        te: `${names[scheme.id]} గురించి చెప్పండి`
      };
      handleUserMessage(prompts[currentLang] || prompts.en);
    });

    schemeChipsEl.appendChild(chip);
  }
}

function renderGuardrailButtons() {
  guardrailActionsEl.innerHTML = "";
  const queries = getUI().guardrailQueries || [];

  queries.forEach((item) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "guardrail-btn";
    btn.textContent = item.label;
    btn.addEventListener("click", () => handleUserMessage(item.query));
    guardrailActionsEl.appendChild(btn);
  });
}

/* ============================================
   INSPECTOR MODAL
   ============================================ */
function openInspector() {
  modalBody.innerHTML = `
    <h3>System prompt (constraint)</h3>
    <p class="mono" style="white-space:pre-wrap;background:var(--green-soft);padding:0.75rem;border-radius:8px;font-size:0.82rem;">${SYSTEM_PROMPT.replace(/</g, "&lt;")}</p>

    <h3>Verified knowledge sources</h3>
    <div class="source-list">
      <ul>
        ${VERIFIED_SOURCES.map((s) => `<li>${s}</li>`).join("")}
      </ul>
    </div>

    <h3>Mandatory fallback behaviour</h3>
    <p>Any query that does not match keywords for PM-KISAN, PMFBY, Soil Health Card, KCC or PMKSY receives the fixed fallback message. The assistant never invents prices, weather, pesticide advice or other unverified content.</p>

    <h3>Schemes currently in knowledge base</h3>
    <ul>
      <li>PM-KISAN – income support</li>
      <li>PMFBY – crop insurance</li>
      <li>Soil Health Card</li>
      <li>Kisan Credit Card (KCC)</li>
      <li>PMKSY – irrigation / Per Drop More Crop</li>
    </ul>
  `;
  inspectorModal.hidden = false;
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

function closeInspector() {
  inspectorModal.hidden = true;
  document.body.style.overflow = "";
}

/* ============================================
   HIGH-CONTRAST TOGGLE
   ============================================ */
function toggleContrast() {
  const on = document.body.classList.toggle("high-contrast");
  contrastToggle.setAttribute("aria-pressed", on ? "true" : "false");
  try {
    localStorage.setItem("kisaan-hc", on ? "1" : "0");
  } catch (e) { /* ignore */ }
}

/* ============================================
   EVENTS
   ============================================ */
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handleUserMessage(userInput.value);
});

userInput.addEventListener("input", () => {
  userInput.style.height = "auto";
  userInput.style.height = Math.min(userInput.scrollHeight, 120) + "px";
});

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    handleUserMessage(userInput.value);
  }
});

langSelect.addEventListener("change", () => {
  currentLang = langSelect.value;
  if (recognition) {
    const langMap = { en: "en-IN", hi: "hi-IN", pa: "pa-IN", mr: "mr-IN", ta: "ta-IN", te: "te-IN" };
    recognition.lang = langMap[currentLang] || "en-IN";
  }
  if (window.speechSynthesis) speechSynthesis.cancel();
  updateUIForLanguage();
});

contrastToggle.addEventListener("click", toggleContrast);
micBtn.addEventListener("click", toggleMic);
inspectorBtn.addEventListener("click", openInspector);
modalClose.addEventListener("click", closeInspector);
modalBackdrop.addEventListener("click", closeInspector);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !inspectorModal.hidden) closeInspector();
});

/* ============================================
   INIT
   ============================================ */
function init() {
  try {
    if (localStorage.getItem("kisaan-hc") === "1") {
      document.body.classList.add("high-contrast");
      contrastToggle.setAttribute("aria-pressed", "true");
    }
  } catch (e) { /* ignore */ }

  initSpeechRecognition();
  updateUIForLanguage();
  userInput.focus();
}

init();
