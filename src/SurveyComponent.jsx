import React from "react";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "./index.css";
import { json } from "./json";

StylesManager.applyTheme("defaultV2");

function SurveyComponent() {
    const survey = new Model(json);
    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
    });
    // survey.showPreviewBeforeComplete = "showAnsweredQuestions";
    
    return (<Survey model={survey} />);
}

export default SurveyComponent;