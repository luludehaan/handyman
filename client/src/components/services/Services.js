import { Image, Item, Button, Segment, PaginationItem } from 'semantic-ui-react';
import ServiceSes from '../styledComponents/ServiceStyles';
import Images from '../images/Elect.jpg';
export const styles = {
  titleHeader: {
    color: "white",
    textAlign: "center",
    background: "grey",
    fontSize: "40px",
  },
  eachHeader: {
    display: "block",
    color: "white",
    textAlign: "center",
    marginBottom: "10px",
    textDecoration: "underline",
    fontSize: "30px",
    marginTop: "15px",
  },
  p: {
    
    color: "white",
    fontSize: "1.2em",
    
  },
  eachService: {
    background: "dimgrey",
  },
  eachButton: {
    color: "green",
    height: "30px",
    fontSize: "20px",
    borderRadius: "50px",
    marginLeft: "60%"
  },
  eachDesc: {
    color: "blue",
    fontSize: "1.1em"
  }
}

const Services = () => {
  return (
    <>
    <Item.Group>
      <h1 style={ styles.titleHeader }>Our Professional Services</h1>
      <Item>
        <Item.Image size='medium' src='https://images.unsplash.com/photo-1541604193435-22287d32c2c2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80' />
        <Item.Content style={ styles.eachService }>
      <Item.Header as='a' style={ styles.eachHeader }>Home Remodeler<button style={ styles.eachButton }>View</button></Item.Header>
      <Item.Meta style={ styles.eachDesc }>Description</Item.Meta>
      <Item.Description style={ styles.p }>Remodelers perform remodel work of all types on commercial 
        and residential property, including painting, installing plumbing fixtures, 
        and general carpentry tasks. A remodeling contractor is a general contractor 
        who specializes in remodeling work, so if you have a remodeling project, 
        then you would contact a remodeling contractor .Whether you are adding a 
        new room to your home or remodeling your basement, you will find that a 
        remodeling contractor is the type of contractor that you need.</Item.Description>
      
      </Item.Content>
      </Item>
      <Item>
        <Item.Image size='medium' src='https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGx1bWJpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' />
        <Item.Content style={ styles.eachService }>
      <Item.Header as='a' style={ styles.eachHeader }>Plumber</Item.Header>
      <Item.Meta style={ styles.eachDesc }>Description</Item.Meta>
      <Item.Description style={ styles.p }>A plumber is responsible for installing, repairing and maintaining pipes, 
        fixtures and other plumbing used for water distribution and waste water disposal in 
        commercial and industrial buildings. A plumber reads blueprints, drawings and specifications
         to determine the layout of plumbing systems</Item.Description>
      
      </Item.Content>
      </Item>
      <Item>
        <Item.Image size='medium' src='https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80' />
        <Item.Content style={ styles.eachService }>
      <Item.Header as='a' style={ styles.eachHeader }>HVAC Tech</Item.Header>
      <Item.Meta style={ styles.eachDesc }>Description</Item.Meta>
      <Item.Description style={ styles.p }>An HVAC technician deals with the repair, maintenance and installation 
        of a home or business's heating and cooling systems, including refrigeration. 
        HVAC technicians, sometimes referred to as HVACR , are trained to update units 
        for increased energy efficiency and performance, and to meet the most current 
        government regulations.</Item.Description>
      
      </Item.Content>
      </Item>
      <Item>
        <Item.Image size='medium' src='https://images.unsplash.com/photo-1547004188-83e2bf446b24?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80' />
        <Item.Content style={ styles.eachService }>
      <Item.Header as='a' style={ styles.eachHeader }>Electrician</Item.Header>
      <Item.Meta style={ styles.eachDesc }>Description</Item.Meta>
      <Item.Description style={ styles.p }>Electricians are tradesmen and women whose responsibilities are to design, 
        install, maintain, and troubleshoot electrical wiring systems. These systems can be located in homes, 
        commercial or industrial buildings, and even in machines and large pieces of equipment. 
        Electricians work either inside or outside to make possible the use of lights, televisions, 
        industrial equipment, appliances, and many other essential items.</Item.Description>
      
      </Item.Content>
      </Item>
      <Item>
        <Item.Image size='medium' src='https://images.unsplash.com/photo-1571686683059-4b1bf2086a13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' />
        <Item.Content style={ styles.eachService }>
      <Item.Header as='a' style={ styles.eachHeader }>Roofer</Item.Header>
      <Item.Meta style={ styles.eachDesc }>Description</Item.Meta>
      <Item.Description style={ styles.p }>A roofer is a professional who specializes in roof construction. 
        Roofers monitor the entire process of roofing in residential as well as commercial construction. 
        They analyze the construction plans and make sure that the roofing is done in strict accordance with the design. 
        Roofers also determine the materials, substrates and supportive accessories to be used for roof installations.</Item.Description>
      
      </Item.Content>
      </Item>
      </Item.Group>
    </>
  )
}
export default Services;