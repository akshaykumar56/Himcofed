import Accordion from 'react-bootstrap/Accordion';
import './Accordion.css'
function Accordion1() {
  return (
    <Accordion defaultActiveKey="0" >

      <Accordion.Item eventKey="0">
        <Accordion.Header style={{fontFamily:'Domine'}}>Voluntary and Open Membership</Accordion.Header>
        <Accordion.Body>
        Co-operatives are voluntary organizations, open to all persons able to use their services and willing to accept the responsibilities of membership, without gender, social, racial, political, or religious discrimination.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header style={{fontFamily:'Domine',fontWeight:'bold'}}>Democratic Member Control</Accordion.Header>
        <Accordion.Body >
        Co-operatives are democratic organizations controlled by their members, who actively participate in setting their policies and making decisions. Men and women serving as elected representatives are accountable to the membership. In primary co-operatives, members have equal voting rights (one member, one vote) and co-operatives at other levels are also organized in a democratic manner.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header style={{fontFamily:'Domine',fontWeight:'bold'}}>Member Economic Participation</Accordion.Header>
        <Accordion.Body >
        Members contribute equitably to, and democratically control, the capital of their co-operative. At least part of that capital is usually the common property of the cooperative. Members usually receive limited compensation, if any, on capital subscribed as a condition of membership. Members allocate surpluses for any or all of the following purposes: developing their co-operative, possibly by setting up reserves, part of which at least would be indivisible; benefiting members in proportion to their transactions with the co-operative, and supporting other activities approved by the membership.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header style={{fontFamily:'Domine',fontWeight:'bold'}}>Autonomy and Independence</Accordion.Header>
        <Accordion.Body >
        Co-operatives are autonomous, self-help organizations controlled by their members. If they enter into agreements with other organizations, including governments, or raise capital from external sources, they do so on terms that ensure democratic control by their members and maintain their cooperative autonomy.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header style={{fontFamily:'Domine',fontWeight:'bold'}}>Education, Training and Information</Accordion.Header>
        <Accordion.Body >
        Co-operatives provide education and training for their members, elected representatives, managers, and employees so they can contribute effectively to the development of their co-operatives. They inform the general public – particularly young people and opinion leaders – about the nature and benefits of co-operation.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header style={{fontFamily:'Domine',fontWeight:'bold'}}>Co-operation among Co-operatives</Accordion.Header>
        <Accordion.Body >
        Co-operatives serve their members most effectively and strengthen the co-operative movement by working together through local, national, regional and international structures.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header style={{fontFamily:'Domine',fontWeight:'bold'}}>Concern for Community</Accordion.Header>
        <Accordion.Body >
        Co-operatives work for the sustainable development of their communities through policies approved by their members.
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
  );
}

export default Accordion1;