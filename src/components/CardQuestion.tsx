import {StyledAccordion} from "components/StyledComponents/StyledAccordion.ts";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import {QuestionCardProps} from "../description.ts";




export const CardQuestion = ({
                                 title = 'Текст',
                                 text = 'Текст поверх размытого фона'
}: QuestionCardProps) => {


    return (
        <StyledAccordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography variant="h4" gutterBottom>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="h6" gutterBottom>{text}</Typography>
            </AccordionDetails>
        </StyledAccordion>
    );
};