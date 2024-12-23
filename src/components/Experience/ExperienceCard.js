import React from "react";
import Card from "react-bootstrap/Card";
import { PiNavigationArrow } from "react-icons/pi";

const ExperienceCard = ({
  //   logo,
  company,
  //   location,
  role,
  //   duration,
  description,
}) => {
  return (
    <Card className="experience-card-view">
      <div className="card-details">
        <h1>{company}</h1>
        <h2>{role}</h2>
        <Card.Text>
          {description?.map((item, index) => (
            <p
              key={index + new Date().toString()}
              className="flex items-start sm:items-center gap-x-3 sm:gap-x-4 text-[var(--black-primary)] font-semibold text-[15px]"
            >
              <PiNavigationArrow className="min-w-[18px] min-h-[18px] mt-1 sm:mt-0 rotate-[132deg]" />
              {item.text}
            </p>
          ))}
        </Card.Text>

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component */}
      </div>
    </Card>
  );
};

// function ExperienceCard(props) {
//   return (
//     <Card className="experience-card-view">
//       <div className="card-details">
//         <Card.Title>{props.title}</Card.Title>
//         <Card.Text style={{ textAlign: "justify" }}>
//           {props.description}
//         </Card.Text>
//         <Button variant="primary" href={props.ghLink} target="_blank">
//           <BsGithub /> &nbsp;
//           {props.isBlog ? "Blog" : "GitHub"}
//         </Button>
//
//       </div>
//     </Card>
//   );
// }

export default ExperienceCard;
