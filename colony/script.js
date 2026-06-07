// FMV Project Playback Script
const videos = ["https://freyastack.com/colony/videos/Start_Page_Loop.mp4","https://freyastack.com/colony/videos/Opening_Cutscene.mp4","https://freyastack.com/colony/videos/Corridor_1.1.mp4","https://freyastack.com/colony/videos/Posters.mp4","https://freyastack.com/colony/videos/Corridor_1.2.mp4","https://freyastack.com/colony/videos/Maintenance_1.mp4","https://freyastack.com/colony/videos/Inventory.mp4","https://freyastack.com/colony/videos/Maintenance_2.mp4","https://freyastack.com/colony/videos/Corridor_2.mp4","https://freyastack.com/colony/videos/Hydroponics_1.mp4","https://freyastack.com/colony/videos/Crop_Faliure.mp4","https://freyastack.com/colony/videos/Hydroponics_2.mp4","https://freyastack.com/colony/videos/Vent_1.mp4","https://freyastack.com/colony/videos/Meet_Me_Note.mp4","https://freyastack.com/colony/videos/Vent_2.mp4","https://freyastack.com/colony/videos/Life_Support_1.mp4","https://freyastack.com/colony/videos/Vitals.mp4","https://freyastack.com/colony/videos/Life_Support_2.mp4","https://freyastack.com/colony/videos/Cable_Run.mp4","https://freyastack.com/colony/videos/Comms_1.mp4","https://freyastack.com/colony/videos/Shuttles_Launched.mp4","https://freyastack.com/colony/videos/Comms_2.mp4","https://freyastack.com/colony/videos/Corridor_3.mp4","https://freyastack.com/colony/videos/Med_Bay_1.mp4","https://freyastack.com/colony/videos/Consultation.mp4","https://freyastack.com/colony/videos/Med_Bay_2.mp4","https://freyastack.com/colony/videos/Corridor_4.1.mp4","https://freyastack.com/colony/videos/Notice.mp4","https://freyastack.com/colony/videos/Corridor_4.2.mp4","https://freyastack.com/colony/videos/Habitation_1.mp4","https://freyastack.com/colony/videos/The_Plan_Note.mp4","https://freyastack.com/colony/videos/Habitation_2.mp4","https://freyastack.com/colony/videos/Earwig_Feast.mp4","https://freyastack.com/colony/videos/Closing_Cutscene.mp4"];
const audioFiles = [];
const hotspotsByVideo = {"https://freyastack.com/colony/videos/Start_Page_Loop.mp4":[{"x":29.62505097879282,"y":73.19991438356165,"width":40.29363784665579,"height":15.890410958904098,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/Opening_Cutscene.mp4","time":0,"startTime":0,"endTime":11,"name":"","audioFile":null,"condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""},"correctVideoLink":null,"incorrectVideoLink":null}],"https://freyastack.com/colony/videos/Opening_Cutscene.mp4":[],"https://freyastack.com/colony/videos/Corridor_1.1.mp4":[{"x":70.08182096247961,"y":37.09034742120344,"width":11.092985318107665,"height":28.868194842406886,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/Posters.mp4","time":0,"startTime":0,"endTime":8,"name":"","audioFile":"","condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""},"correctVideoLink":null,"incorrectVideoLink":null}],"https://freyastack.com/colony/videos/Corridor_1.2.mp4":[{"x":70.08182096247961,"y":37.30524713467049,"width":11.092985318107665,"height":29.22636103151863,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/Posters.mp4","time":0,"startTime":0,"endTime":8,"name":"","audioFile":"","condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""},"correctVideoLink":null,"incorrectVideoLink":null},{"x":10.70172308319739,"y":59.36828438395415,"width":4.893964110929852,"height":19.48424068767909,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/Maintenance_1.mp4","time":0,"startTime":0,"endTime":8,"name":"","audioFile":null,"condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""},"correctVideoLink":null,"incorrectVideoLink":null}],"https://freyastack.com/colony/videos/Maintenance_1.mp4":[{"x":54.74740008156607,"y":72.92594178082192,"width":14.029363784665577,"height":5.753424657534254,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/Inventory.mp4","time":0,"startTime":0,"endTime":8,"name":"","audioFile":"","condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""},"correctVideoLink":null,"incorrectVideoLink":null}],"https://freyastack.com/colony/videos/Maintenance_2.mp4":[{"x":54.74740008156607,"y":72.37799657534246,"width":13.376835236541595,"height":6.301369863013704,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/Inventory.mp4","time":0,"startTime":0,"endTime":8,"name":"","audioFile":"","condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""},"correctVideoLink":null,"incorrectVideoLink":null},{"x":13.31183727569331,"y":41.96703767123287,"width":7.9934747145187615,"height":38.9041095890411,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/Corridor_2.mp4","time":0,"startTime":0,"endTime":8,"name":"","audioFile":null,"condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""},"correctVideoLink":null,"incorrectVideoLink":null}],"https://freyastack.com/colony/videos/Corridor_2.mp4":[{"x":84.76371329526917,"y":52.925941780821915,"width":2.936378466557912,"height":18.630136986301366,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/Hydroponics_1.mp4","time":0,"startTime":0,"endTime":8,"name":"","audioFile":null,"condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""},"correctVideoLink":null,"incorrectVideoLink":null}],"https://freyastack.com/colony/videos/Hydroponics_1.mp4":[{"x":82.64299551386624,"y":24.124731375358166,"width":8.156606851549753,"height":17.76504297994269,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/Crop_Faliure.mp4","time":0,"startTime":0,"endTime":8,"name":"","audioFile":"","condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""},"correctVideoLink":null,"incorrectVideoLink":null}],"https://freyastack.com/colony/videos/Hydroponics_2.mp4":[{"x":82.64299551386624,"y":23.838198424068768,"width":8.319738988580738,"height":19.197707736389685,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/Crop_Faliure.mp4","time":0,"startTime":0,"endTime":8,"name":"","audioFile":"","condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""},"correctVideoLink":null,"incorrectVideoLink":null},{"x":-0.06499796084828711,"y":1.2020952722063039,"width":20.717781402936378,"height":37.53581661891117,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/Vent_1.mp4","time":0,"startTime":0,"endTime":8,"name":"","audioFile":"","condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""},"correctVideoLink":null,"incorrectVideoLink":null}],"https://freyastack.com/colony/videos/Life_Support_1.mp4":[{"x":12.822440864600326,"y":7.720462328767123,"width":17.94453507340946,"height":21.0958904109589,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/Vitals.mp4","time":0,"startTime":0,"endTime":8,"name":"","audioFile":"","condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""},"correctVideoLink":null,"incorrectVideoLink":null}],"https://freyastack.com/colony/videos/Life_Support_2.mp4":[{"x":12.98557300163132,"y":7.446489726027397,"width":17.292006525285483,"height":20.82191780821918,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/Vitals.mp4","time":0,"startTime":0,"endTime":8,"name":"","audioFile":"","condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""},"correctVideoLink":null,"incorrectVideoLink":null},{"x":12.822440864600326,"y":86.07662671232876,"width":8.482871125611746,"height":7.123287671232887,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/Cable_Run.mp4","time":0,"startTime":0,"endTime":8,"name":"","audioFile":null,"condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""},"correctVideoLink":null,"incorrectVideoLink":null}],"https://freyastack.com/colony/videos/Cable_Run.mp4":[{"x":61.59894983686787,"y":38.67936643835617,"width":5.546492659053818,"height":8.219178082191775,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/Comms_1.mp4","time":0,"startTime":0,"endTime":8,"name":"","audioFile":null,"condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""},"correctVideoLink":null,"incorrectVideoLink":null}],"https://freyastack.com/colony/videos/Corridor_3.mp4":[{"x":40.2286398858075,"y":58.40539383561644,"width":3.5889070146818938,"height":10.958904109589042,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/Med_Bay_1.mp4","time":0,"startTime":0,"endTime":8,"name":"","audioFile":null,"condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""},"correctVideoLink":null,"incorrectVideoLink":null}],"https://freyastack.com/colony/videos/Med_Bay_1.mp4":[{"x":31.58263662316476,"y":80.59717465753424,"width":19.575856443719424,"height":19.45205479452055,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/Consultation.mp4","time":0,"startTime":0,"endTime":8,"name":"","audioFile":"","condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""},"correctVideoLink":null,"incorrectVideoLink":null}],"https://freyastack.com/colony/videos/Med_Bay_2.mp4":[{"x":31.58263662316476,"y":78.40539383561645,"width":18.433931484502452,"height":21.36986301369862,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/Consultation.mp4","time":0,"startTime":0,"endTime":8,"name":"","audioFile":"","condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""},"correctVideoLink":null,"incorrectVideoLink":null},{"x":65.02472471451875,"y":23.610873287671232,"width":3.4257748776508947,"height":18.90410958904109,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/Corridor_4.1.mp4","time":0,"startTime":0,"endTime":8,"name":"","audioFile":null,"condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""},"correctVideoLink":null,"incorrectVideoLink":null}],"https://freyastack.com/colony/videos/Corridor_4.1.mp4":[{"x":56.378721451876025,"y":10.73416095890411,"width":9.624796084828695,"height":20.000000000000004,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/Notice.mp4","time":0,"startTime":0,"endTime":8,"name":"","audioFile":"","condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""},"correctVideoLink":null,"incorrectVideoLink":null}],"https://freyastack.com/colony/videos/Corridor_4.2.mp4":[{"x":56.05245717781403,"y":10.186215753424657,"width":9.951060358890693,"height":20.547945205479458,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/Notice.mp4","time":0,"startTime":0,"endTime":8,"name":"","audioFile":"","condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""},"correctVideoLink":null,"incorrectVideoLink":null},{"x":21.631576264274063,"y":18.679366438356166,"width":10.766721044045678,"height":58.630136986301366,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/Habitation_1.mp4","time":0,"startTime":0,"endTime":8,"name":"","audioFile":null,"condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""},"correctVideoLink":null,"incorrectVideoLink":null}],"https://freyastack.com/colony/videos/Habitation_1.mp4":[{"x":26.03614396411093,"y":24.158818493150687,"width":12.234910277324634,"height":7.945205479452053,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/The_Plan_Note.mp4","time":0,"startTime":0,"endTime":17,"name":"","audioFile":"","condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""},"correctVideoLink":null,"incorrectVideoLink":null}],"https://freyastack.com/colony/videos/Habitation_2.mp4":[{"x":26.362408238172918,"y":23.06292808219178,"width":12.071778140293638,"height":9.041095890410958,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/The_Plan_Note.mp4","time":0,"startTime":0,"endTime":17,"name":"","audioFile":"","condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""},"correctVideoLink":null,"incorrectVideoLink":null},{"x":47.406453915171284,"y":71.00813356164383,"width":12.561174551386628,"height":13.424657534246577,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/Earwig_Feast.mp4","time":0,"startTime":0,"endTime":17,"name":"","audioFile":"","condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""},"correctVideoLink":null,"incorrectVideoLink":null}],"https://freyastack.com/colony/videos/Comms_1.mp4":[{"x":53.92650462962963,"y":9.780182453416149,"width":20.370370370370367,"height":19.87577639751553,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/Shuttles_Launched.mp4","time":0,"startTime":0,"endTime":8,"name":"","audioFile":"","condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""},"correctVideoLink":null,"incorrectVideoLink":null}],"https://freyastack.com/colony/videos/Comms_2.mp4":[{"x":53.92650462962963,"y":8.848505434782608,"width":20.18518518518519,"height":20.807453416149073,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/Shuttles_Launched.mp4","time":0,"startTime":0,"endTime":8,"name":"","audioFile":"","condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""},"correctVideoLink":null,"incorrectVideoLink":null},{"x":8.741319444444445,"y":23.755337732919255,"width":9.999999999999998,"height":18.012422360248447,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/Corridor_3.mp4","time":0,"startTime":0,"endTime":8,"name":"","audioFile":"","condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""},"correctVideoLink":null,"incorrectVideoLink":null}],"https://freyastack.com/colony/videos/Closing_Cutscene.mp4":[],"https://freyastack.com/colony/videos/Consultation.mp4":[{"x":11.704282407407407,"y":90.61986019736842,"width":7.037037037037036,"height":7.23684210526315,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/Med_Bay_2.mp4","time":0,"startTime":0,"endTime":8,"name":"","audioFile":"","condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""}}],"https://freyastack.com/colony/videos/Crop_Faliure.mp4":[{"x":11.889467592592592,"y":91.27775493421053,"width":7.037037037037038,"height":6.578947368421041,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/Hydroponics_2.mp4","time":0,"startTime":0,"endTime":8,"name":"","audioFile":"","condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""}}],"https://freyastack.com/colony/videos/Earwig_Feast.mp4":[],"https://freyastack.com/colony/videos/Inventory.mp4":[{"x":12.074652777777779,"y":91.27775493421053,"width":6.851851851851851,"height":6.578947368421041,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/Maintenance_2.mp4","time":0,"startTime":0,"endTime":8,"name":"","audioFile":"","condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""}}],"https://freyastack.com/colony/videos/Meet_Me_Note.mp4":[{"x":11.889467592592592,"y":91.27775493421053,"width":7.222222222222221,"height":6.25,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/Vent_2.mp4","time":0,"startTime":0,"endTime":8,"name":"","audioFile":"","condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""}}],"https://freyastack.com/colony/videos/Notice.mp4":[{"x":12.259837962962964,"y":91.60670230263158,"width":6.851851851851849,"height":5.921052631578959,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/Corridor_4.2.mp4","time":0,"startTime":0,"endTime":8,"name":"","audioFile":"","condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""}}],"https://freyastack.com/colony/videos/Posters.mp4":[{"x":11.519097222222221,"y":90.61986019736842,"width":7.777777777777779,"height":7.23684210526315,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/Corridor_1.2.mp4","time":0,"startTime":0,"endTime":8,"name":"","audioFile":"","condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""}}],"https://freyastack.com/colony/videos/Shuttles_Launched.mp4":[{"x":12.074652777777779,"y":91.27775493421053,"width":6.851851851851851,"height":5.921052631578931,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/Comms_2.mp4","time":0,"startTime":0,"endTime":8,"name":"","audioFile":"","condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""}}],"https://freyastack.com/colony/videos/The_Plan_Note.mp4":[{"x":12.074652777777779,"y":91.93564967105263,"width":6.481481481481481,"height":5.5921052631579045,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/Habitation_2.mp4","time":0,"startTime":0,"endTime":17,"name":"","audioFile":"","condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""}}],"https://freyastack.com/colony/videos/Vent_1.mp4":[{"x":39.11168981481482,"y":73.18564967105263,"width":24.444444444444436,"height":20.723684210526315,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/Meet_Me_Note.mp4","time":0,"startTime":0,"endTime":8,"name":"","audioFile":"","condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""}}],"https://freyastack.com/colony/videos/Vent_2.mp4":[{"x":38.926504629629626,"y":72.85670230263158,"width":24.44444444444445,"height":20.72368421052633,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/Meet_Me_Note.mp4","time":0,"startTime":0,"endTime":8,"name":"","audioFile":"","condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""}},{"x":43.0005787037037,"y":36.014597039473685,"width":3.1481481481481453,"height":23.68421052631578,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/Life_Support_1.mp4","time":0,"startTime":0,"endTime":8,"name":"","audioFile":"","condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""}}],"https://freyastack.com/colony/videos/Vitals.mp4":[{"x":11.704282407407407,"y":90.61986019736842,"width":7.5925925925925934,"height":6.578947368421041,"text":"","externalLink":"","videoLink":"https://freyastack.com/colony/videos/Life_Support_2.mp4","time":0,"startTime":0,"endTime":8,"name":"","audioFile":"","condition":{"enabled":false,"variable":"","operator":"equals","value":""},"action":{"enabled":false,"type":"set","variable":"","value":""},"clickCondition":{"enabled":false,"variable":"","operator":"equals","value":""},"elseVideoLink":"","elseExternalLink":"","elseText":"","elseAction":{"enabled":false,"type":"set","variable":"","value":""}}]};
const quizzesByVideo = {};
const videoOptions = {"https://freyastack.com/colony/videos/Start_Page_Loop.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/Opening_Cutscene.mp4":{"playNext":"https://freyastack.com/colony/videos/Corridor_1.1.mp4","loop":false},"https://freyastack.com/colony/videos/Corridor_1.1.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/Posters.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/Maintenance_1.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/Inventory.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/Maintenance_2.mp4":{"playNext":null,"loop":true},"/var/folders/m5/ndsss99x6l57x1qpp4d75w840000gq/T/fmvmachine/Corridor_2.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/Hydroponics_1.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/Hydroponics_2.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/Crop_Faliure.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/Vent_1.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/Meet_Me_Note.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/Vent_2.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/Life_Support_1.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/Vitals.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/Life_Support_2.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/Cable_Run.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/Comms_1.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/Shuttles_Launched.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/Comms_2.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/Corridor_3.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/Med_Bay_1.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/Consultation.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/Corridor_4.1.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/Notice.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/Corridor_4.2.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/Habitation_1.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/The_Plan_Note.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/Habitation_2.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/Earwig_Feast.mp4":{"playNext":"https://freyastack.com/colony/videos/Closing_Cutscene.mp4","loop":false},"https://freyastack.com/colony/videos/Closing_Cutscene.mp4":{"playNext":"https://freyastack.com/colony/videos/Start_Page_Loop.mp4","loop":false},"https://freyastack.com/colony/videos/Med_Bay_2.mp4":{"playNext":null,"loop":true},"/Users/mokey/Desktop/Unit 10/Small Videos/Letterboxed/Posters.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/Inventory.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/Crop_Faliure.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/Vent_1.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/Meet_Me_Note.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/Letterboxed/Vent_2.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/Vitals.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/Shuttles_Launched.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/Consultation.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/Notice.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/The_Plan_Note.mp4":{"playNext":null,"loop":true},"https://freyastack.com/colony/videos/Earwig_Feast.mp4":{"playNext":"https://freyastack.com/colony/videos/Closing_Cutscene.mp4","loop":false}};
const variables = {};

let currentVideoPath = null;
let currentHotspots = [];
let currentQuizzes = [];
let activeQuiz = null;
let runtimeValues = {};
let currentHotspotAudio = null;

// Single persistent trigger menu shared across all hotspots
const hotspotTriggerMenu = document.createElement('div');
hotspotTriggerMenu.className = 'hotspot-trigger-menu';
hotspotTriggerMenu.style.position = 'fixed';
hotspotTriggerMenu.style.display = 'none';
document.body.appendChild(hotspotTriggerMenu);

let hotspotMenuTimer = null;
let hotspotMenuCurrentTriggers = [];
let hotspotMenuCurrentHotspot = null;

function showHotspotMenu() {
    hotspotTriggerMenu.classList.add('visible');
    hotspotTriggerMenu.style.display = 'block';
}

function hideHotspotMenu() {
    hotspotTriggerMenu.classList.remove('visible');
    hotspotTriggerMenu.style.display = 'none';
}

function keepHotspotMenuOpen() {
    if (hotspotMenuTimer) {
        clearTimeout(hotspotMenuTimer);
        hotspotMenuTimer = null;
    }
}

function scheduleHotspotMenuHide() {
    if (hotspotMenuTimer) clearTimeout(hotspotMenuTimer);
    hotspotMenuTimer = setTimeout(function() {
        hideHotspotMenu();
        hotspotMenuTimer = null;
    }, 150);
}

hotspotTriggerMenu.addEventListener('mouseenter', keepHotspotMenuOpen);
hotspotTriggerMenu.addEventListener('mouseleave', scheduleHotspotMenuHide);

document.addEventListener('mousemove', function(e) {
    if (hotspotTriggerMenu.style.display === 'none') return;
    var target = e.target;
    var isOverMenu = hotspotTriggerMenu.contains(target);
    var isOverHotspot = target.closest && target.closest('.hotspot');
    if (isOverMenu || isOverHotspot) {
        keepHotspotMenuOpen();
    } else {
        scheduleHotspotMenuHide();
    }
});

// Stop any playing hotspot audio when clicking outside a hotspot in the video area
document.addEventListener('click', function(e) {
    if (!e.target.closest('.hotspot') && currentHotspotAudio) {
        var videoContainer = document.getElementById('video-container');
        if (videoContainer && videoContainer.contains(e.target)) {
            currentHotspotAudio.onended = null;
            currentHotspotAudio.pause();
            currentHotspotAudio = null;
        }
    }
});

const videoPlayer = document.getElementById('video-player');
const hotspotOverlay = document.getElementById('hotspot-overlay');
const quizContainer = document.getElementById('quiz-container');
const quizContent = document.getElementById('quiz-content');
const textPopup = document.getElementById('text-popup');
const textContent = document.getElementById('text-content');
const closeTextBtn = document.getElementById('close-text');

// Initialize variable runtime values
function initVariables() {
    runtimeValues = {};
    for (const [name, variable] of Object.entries(variables)) {
        runtimeValues[name] = variable.defaultValue;
    }
}

// Get variable value
function getVariableValue(name) {
    return runtimeValues[name];
}

// Set variable value
function setVariableValue(name, value) {
    if (variables[name]) {
        runtimeValues[name] = value;
        return true;
    }
    return false;
}

// Evaluate condition
function evaluateCondition(condition) {
    if (!condition || !condition.enabled) {
        return true;
    }
    
    if (!condition.variable) return true;
    
    const variableValue = getVariableValue(condition.variable);
    const operator = condition.operator || 'equals';
    let compareValue = condition.value;
    const variableDef = variables[condition.variable];
    if (variableDef && variableDef.type === 'number') {
        compareValue = parseFloat(condition.value);
    } else if (variableDef && variableDef.type === 'boolean') {
        compareValue = condition.value === true || condition.value === 'true';
    }
    
    switch (operator) {
        case 'equals': return variableValue == compareValue;
        case 'notEquals': return variableValue != compareValue;
        case 'greaterThan': return variableValue > compareValue;
        case 'lessThan': return variableValue < compareValue;
        case 'greaterThanOrEqual':
        case 'greaterOrEqual': return variableValue >= compareValue;
        case 'lessThanOrEqual':
        case 'lessOrEqual': return variableValue <= compareValue;
        case 'isTrue': return variableValue === true;
        case 'isFalse': return variableValue === false;
        default: return true;
    }
}

// Execute action
function executeAction(action) {
    if (!action || !action.enabled || !action.variable) {
        return;
    }
    const variable = variables[action.variable];
    if (!variable) return;
    
    const currentValue = getVariableValue(action.variable);
    let newValue = currentValue;
    
    switch (action.type) {
        case 'set':
            if (variable.type === 'number') {
                newValue = parseFloat(action.value);
            } else if (variable.type === 'boolean') {
                newValue = action.value === true || action.value === 'true';
            } else {
                newValue = action.value;
            }
            break;
        case 'increment':
            newValue = (parseFloat(currentValue) || 0) + 1;
            break;
        case 'decrement':
            newValue = (parseFloat(currentValue) || 0) - 1;
            break;
        case 'toggle':
            newValue = !currentValue;
            break;
    }
    
    setVariableValue(action.variable, newValue);
    console.log('[Action] ' + action.type + ' ' + action.variable + ' = ' + newValue);
}

function init() {
    initVariables();
    if (videos.length > 0) {
        loadVideo(videos[0]);
    }
    videoPlayer.addEventListener('timeupdate', handleTimeUpdate);
    videoPlayer.addEventListener('ended', handleVideoEnded);
    closeTextBtn.addEventListener('click', closeTextPopup);
}

function loadVideo(filePath) {
    if (!filePath) return;
    currentVideoPath = filePath;
    const videoName = filePath.split(/[\\/]/).pop();
    videoPlayer.removeAttribute('src');
    videoPlayer.load();
    videoPlayer.src = 'videos/' + videoName;
    videoPlayer.load();
    safePlay(videoPlayer);
    // Try full path first, then basename for hotspot lookup
    currentHotspots = hotspotsByVideo[filePath] || hotspotsByVideo[videoName] || [];
    currentQuizzes = quizzesByVideo[filePath] || quizzesByVideo[videoName] || [];
    renderHotspots();
}

function handleTimeUpdate() {
    const currentTime = videoPlayer.currentTime;
    currentHotspots.forEach((hotspot, index) => {
        const el = document.getElementById('hotspot-' + index);
        if (el) {
            const isActive = currentTime >= hotspot.startTime && currentTime <= hotspot.endTime;
            const conditionMet = evaluateCondition(hotspot.condition);
            el.style.display = (isActive && conditionMet) ? 'block' : 'none';
        }
    });
    currentQuizzes.forEach(quiz => {
        if (Math.abs(currentTime - quiz.time) < 0.5 && !quiz.triggered) {
            const conditionMet = evaluateCondition(quiz.condition);
            if (conditionMet) {
                quiz.triggered = true;
                showQuiz(quiz);
            }
        }
    });
}

function renderHotspots() {
    hotspotOverlay.innerHTML = '';
    currentHotspots.forEach((hotspot, index) => {
        const el = document.createElement('div');
        el.id = 'hotspot-' + index;
        el.className = 'hotspot';
        el.style.left = hotspot.x + '%';
        el.style.top = hotspot.y + '%';
        el.style.width = hotspot.width + '%';
        el.style.height = hotspot.height + '%';
        el.style.display = 'none';
        if (hotspot.triggers && hotspot.triggers.length > 0) {
            el.addEventListener('mouseenter', (e) => {
                keepHotspotMenuOpen();
                hotspotTriggerMenu.style.left = e.clientX + 'px';
                hotspotTriggerMenu.style.top = (e.clientY + 20) + 'px';
                const visibleTriggers = hotspot.triggers.filter(t => evaluateCondition(t.condition));
                if (visibleTriggers.length === 0) return;
                hotspotMenuCurrentTriggers = visibleTriggers;
                hotspotMenuCurrentHotspot = hotspot;
                hotspotTriggerMenu.innerHTML = visibleTriggers.map(function(t, idx) {
                    return '<button class="hotspot-trigger-item" data-trigger-id="' + t.id + '">' + (t.label || 'Trigger') + '</button>';
                }).join('');
                hotspotTriggerMenu.querySelectorAll('.hotspot-trigger-item').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const tid = btn.dataset.triggerId;
                        const trigger = hotspotMenuCurrentTriggers.find(t => t.id === tid);
                        if (trigger) executeTrigger(trigger, hotspotMenuCurrentHotspot);
                        hideHotspotMenu();
                    });
                });
                showHotspotMenu();
            });
            el.addEventListener('mouseleave', scheduleHotspotMenuHide);
            el.addEventListener('click', (e) => {
                const visibleTriggers = hotspot.triggers.filter(t => evaluateCondition(t.condition));
                if (visibleTriggers.length === 1) {
                    executeTrigger(visibleTriggers[0], hotspot);
                }
            });
        } else {
            el.addEventListener('click', () => handleHotspotClick(hotspot));
        }
        hotspotOverlay.appendChild(el);
    });
}

function executeTrigger(trigger, hotspot) {
    switch (trigger.type) {
        case 'audio':
            if (trigger.data.audioFile) {
                playHotspotAudio(trigger.data.audioFile);
            }
            break;
        case 'action':
            executeTriggerActionData(trigger.data);
            break;
        case 'text':
            if (trigger.data.text) {
                showTextPopup(trigger.data.text);
            }
            break;
        case 'dialogue':
            executeDialogueTrigger(trigger, hotspot);
            break;
        case 'link':
            if (trigger.data.url) {
                window.open(trigger.data.url, '_blank');
            }
            break;
        case 'video':
            if (trigger.data.videoPath) {
                const index = videos.indexOf(trigger.data.videoPath);
                if (index !== -1) {
                    loadVideo(videos[index]);
                }
            }
            break;
    }
}

function executeTriggerActionData(actionData) {
    if (!actionData.actionVariable) return;

    executeAction({
        enabled: true,
        type: actionData.actionType || 'set',
        variable: actionData.actionVariable,
        value: actionData.actionValue || ''
    });
    handleTimeUpdate();
}

function getDialogueTriggerText(trigger) {
    const conditionMet = evaluateCondition(trigger.data.dialogueCondition);
    return conditionMet ? trigger.data.dialogueText : trigger.data.dialogueElseText;
}

function executeDialogueOption(option, trigger, hotspot) {
    const resultType = option.resultType || 'close';

    if (resultType === 'dialogue') {
        showTextPopup(option.nextText || '');
    } else if (resultType === 'trigger') {
        closeTextPopup();
        const nextTrigger = hotspot && hotspot.triggers ? hotspot.triggers.find(function(candidate) { return candidate.id === option.nextTriggerId; }) : null;
        if (nextTrigger) executeTrigger(nextTrigger, hotspot);
    } else if (resultType === 'action') {
        executeTriggerActionData(option);
        closeTextPopup();
    } else {
        closeTextPopup();
    }
}

function executeDialogueTrigger(trigger, hotspot) {
    const showDialogue = () => {
        const text = getDialogueTriggerText(trigger);
        if (text) showTextPopup(text, trigger, hotspot);
    };

    if (trigger.data.dialogueTiming === 'afterAudio' && trigger.data.audioFile) {
        playHotspotAudio(trigger.data.audioFile, showDialogue);
    } else {
        showDialogue();
    }
}

function handleHotspotClick(hotspot) {
    // Play audio if assigned (regardless of IF/ELSE outcome)
    if (hotspot.audioFile) {
        playHotspotAudio(hotspot.audioFile);
    }
    
    const conditionMet = evaluateCondition(hotspot.clickCondition);
    const actionConfig = conditionMet ? hotspot.action : hotspot.elseAction;
    
    // Execute hotspot actions
    if (actionConfig) {
        executeAction(actionConfig);
        // Force immediate UI update in case the video is paused
        handleTimeUpdate();
    }
    
    const linkToOpen = conditionMet ? hotspot.externalLink : (hotspot.elseExternalLink || null);
    const videoToPlay = conditionMet ? hotspot.videoLink : (hotspot.elseVideoLink || null);
    const textToShow = conditionMet ? hotspot.text : (hotspot.elseText || null);
    
    if (linkToOpen) {
        window.open(linkToOpen, '_blank');
    } else if (videoToPlay) {
        const index = videos.indexOf(videoToPlay);
        if (index !== -1) {
            loadVideo(videos[index]);
        }
    } else if (textToShow) {
        showTextPopup(textToShow);
    }
}

function playHotspotAudio(audioFile, onEnded) {
    try {
        // Resolve to relative audio/ path for exported projects
        var audioName = audioFile.split(/[\\/]/).pop();
        var audioSrc = 'audio/' + audioName;
        if (currentHotspotAudio && currentHotspotAudio.src.includes(audioName)) {
            currentHotspotAudio.onended = null;
            currentHotspotAudio.pause();
            currentHotspotAudio = null;
            return;
        }
        if (currentHotspotAudio) {
            currentHotspotAudio.onended = null;
            currentHotspotAudio.pause();
            currentHotspotAudio = null;
        }
        const audio = new Audio(audioSrc);
        audio.volume = 1.0;
        if (onEnded) {
            audio.onended = onEnded;
        }
        audio.play().catch(function(e) { console.warn('Audio playback failed:', e.message); });
        currentHotspotAudio = audio;
    } catch (error) {
        console.error('Error playing audio:', error);
    }
}

function showTextPopup(text, dialogueTrigger, hotspot) {
    textContent.textContent = text;
    const existingOptions = textPopup.querySelector('.dialogue-options');
    if (existingOptions) existingOptions.remove();

    const options = Array.isArray(dialogueTrigger && dialogueTrigger.data ? dialogueTrigger.data.dialogueOptions : null) ? dialogueTrigger.data.dialogueOptions : [];
    if (options.length > 0) {
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'dialogue-options';
        optionsContainer.style.cssText = 'display:flex;flex-direction:column;gap:8px;margin-bottom:15px;';
        options.forEach(function(option) {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.textContent = option.label || 'Option';
            btn.style.cssText = 'padding:10px 14px;background:#4a4a6e;border:none;border-radius:5px;color:#fff;cursor:pointer;';
            btn.addEventListener('click', function() {
                executeDialogueOption(option, dialogueTrigger, hotspot);
            });
            optionsContainer.appendChild(btn);
        });
        textPopup.insertBefore(optionsContainer, closeTextBtn);
    }
    textPopup.style.display = 'block';
    videoPlayer.pause();
}

function closeTextPopup() {
    textPopup.style.display = 'none';
    const existingOptions = textPopup.querySelector('.dialogue-options');
    if (existingOptions) existingOptions.remove();
    videoPlayer.play();
}

function showQuiz(quiz) {
    activeQuiz = quiz;
    videoPlayer.pause();
    let html = '<h3>' + escapeHtml(quiz.question) + '</h3>';
    html += '<div id="quiz-options">';
    quiz.options.forEach((option, index) => {
        html += '<button class="quiz-option" data-index="' + index + '">' + escapeHtml(option.text) + '</button>';
    });
    html += '</div>';
    html += '<div id="quiz-result" style="display:none;margin-top:20px;font-weight:bold;"></div>';
    html += '<button id="quiz-continue" style="display:none;margin-top:20px;padding:10px 20px;background:#4a4a6e;border:none;border-radius:5px;color:#fff;cursor:pointer;">Continue</button>';
    quizContent.innerHTML = html;
    quizContainer.style.display = 'flex';
    document.querySelectorAll('.quiz-option').forEach(btn => {
        btn.addEventListener('click', handleQuizAnswer);
    });
    document.getElementById('quiz-continue').addEventListener('click', continueQuiz);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function handleQuizAnswer(e) {
    const index = parseInt(e.target.dataset.index);
    const isCorrect = activeQuiz.options[index].isCorrect;
    
    // Disable all option buttons
    document.querySelectorAll('.quiz-option').forEach(btn => {
        btn.disabled = true;
        const btnIndex = parseInt(btn.dataset.index);
        if (btnIndex === index) {
            btn.style.background = isCorrect ? '#4caf50' : '#f44336';
        } else if (activeQuiz.options[btnIndex].isCorrect) {
            btn.style.background = '#4caf50';
        }
    });
    
    // Show result
    const resultDiv = document.getElementById('quiz-result');
    resultDiv.textContent = isCorrect ? 'Correct!' : 'Incorrect';
    resultDiv.style.color = isCorrect ? '#4caf50' : '#f44336';
    resultDiv.style.display = 'block';
    
    // Show continue button
    document.getElementById('quiz-continue').style.display = 'inline-block';
    
    // Evaluate outcome condition if enabled
    const conditionMet = evaluateCondition(activeQuiz.outcomeCondition);
    
    // Choose correct actions based on condition
    const actionConfig = isCorrect 
        ? (conditionMet ? activeQuiz.correctAction : activeQuiz.elseCorrectAction)
        : (conditionMet ? activeQuiz.wrongAction : activeQuiz.elseWrongAction);

    // Execute actions
    if (actionConfig) {
        executeAction(actionConfig);
        handleTimeUpdate();
    }
    
    // Store condition result so continueQuiz can use it
    activeQuiz._lastConditionResult = conditionMet;
}

function continueQuiz() {
    const isCorrect = document.getElementById('quiz-result').textContent === 'Correct!';
    const conditionMet = activeQuiz._lastConditionResult !== undefined ? activeQuiz._lastConditionResult : true;
    
    quizContainer.style.display = 'none';
    
    const correctLink = conditionMet ? activeQuiz.correctVideoLink : activeQuiz.elseCorrectVideoLink;
    const incorrectLink = conditionMet ? activeQuiz.incorrectVideoLink : activeQuiz.elseIncorrectVideoLink;
    
    if (isCorrect && correctLink) {
        const correctIndex = videos.indexOf(correctLink);
        if (correctIndex !== -1) {
            loadVideo(videos[correctIndex]);
            return;
        }
    } else if (!isCorrect && incorrectLink) {
        const incorrectIndex = videos.indexOf(incorrectLink);
        if (incorrectIndex !== -1) {
            loadVideo(videos[incorrectIndex]);
            return;
        }
    }
    videoPlayer.play();
}

function safePlay(player) {
    if (!player) return;
    const playPromise = player.play();
    if (playPromise !== undefined) {
        playPromise.catch(err => {
            if (err.name !== 'AbortError') {
                console.warn('Video play failed:', err);
            }
        });
    }
}

function handleVideoEnded() {
    const options = videoOptions[currentVideoPath] || {};
    
    // Check for quizzes near the end first
    const quizzes = quizzesByVideo[currentVideoPath] || [];
    const duration = videoPlayer.duration;
    
    const hasEndQuiz = quizzes.some(q => {
        const isNearEnd = Math.abs(q.time - duration) < 1;
        if (!isNearEnd) return false;
        return evaluateCondition(q.condition);
    });
    
    if (hasEndQuiz) {
        // Let the quiz handle playback (it should pause and show)
        return;
    }
    
    if (options.loop) {
        videoPlayer.currentTime = 0;
        safePlay(videoPlayer);
    } else if (options.playNext) {
        const index = videos.indexOf(options.playNext);
        if (index !== -1) {
            loadVideo(videos[index]);
        }
    }
}

init();