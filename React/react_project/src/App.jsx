import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      content:
        "Prime customers that have access to bank credit and are satisfied with the current product",
      bottomText: "Satisfied",
      color : "green"
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1507206130118-b5907f817163?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      content:
        "Prime customers that have access to bank credit and are not satisfied with the current service",
      bottomText: "Underserved",
      color : "red"
    },
    {
      id: 3,
      imageUrl: "https://plus.unsplash.com/premium_photo-1661594430156-6d5973b67131?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
      content:
        "Customers from near-prime and sub-prime segments with no access to bank credit",
      bottomText: "Underbanked",
      color : "pink"
    },

  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    content:
      "Young professionals with stable income but limited credit history looking for flexible loan options",
    bottomText: "Emerging",
    color: "purple",
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    content:
      "Small business owners who rely on informal lending due to lack of structured banking support",
    bottomText: "Unserved",
    color: "red",
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    content:
      "Freelancers and gig workers with irregular income streams needing customized financial solutions",
    bottomText: "Flexible",
    color: "yellow",
  },
  {
    id: 7,
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    content:
      "Tech-savvy users who prefer fully digital banking experiences with fast approvals and minimal paperwork",
    bottomText: "Digital First",
    color: "cyan",
  },
  {
    id: 8,
    imageUrl: "https://plus.unsplash.com/premium_photo-1661583687357-f047d7f7b399?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ3fHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
    content:
      "Rural customers with limited access to traditional banking infrastructure but growing financial needs",
    bottomText: "Rural Gap",
    color: "green",
  }
  ];
  return (
    <div className="flex flex-col items-center justify-center h-full " >
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App
