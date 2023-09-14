import { fireEvent, render, screen } from "@testing-library/react"; 
import Home from "./index";


describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personnel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});

// Test unitaires supplémentaires implementés
describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    render(<Home />);
    const eventList= screen.getByTestId("listOfEvent");
    expect(eventList).toBeInTheDocument();  
  })

  it("a list a people is displayed", () => {
    render(<Home />);
    const peopleList= screen.getByTestId("peopleList");
    expect(peopleList).toBeInTheDocument(); 
  })

  it("a footer is displayed", () => {
    render(<Home />);
    const footerContent = screen.getByTestId("footer-testid");
    expect(footerContent).toBeInTheDocument(); 
  })

  it("an event card, with the last event, is displayed", () => {
    render(<Home />); 
    const  lastEventCard = screen.getByTestId("last-event");
    expect(lastEventCard).toBeInTheDocument();

  })
});
