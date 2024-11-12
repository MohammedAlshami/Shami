"use client";
import { useEffect, useState } from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { getAllRecords, insertRecord } from "@/lib/firestoreFunctions";
import DynamicModal from "@/components/ui/EditModal";

// Define the interface for a Meeting record
interface Meeting {
  title: string;
  description: string;
  link: string;
  image: string;
  date: string;
}

const MeetingsPage: React.FC = () => {
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [isModalOpen, setModalOpen] = useState(false); // State for modal visibility

  // Define the fields for the meeting modal form
  const meetingFields = [
    { name: "title", label: "Title", type: "text", required: true },
    { name: "description", label: "Description", type: "text", required: true },
    { name: "link", label: "Meeting URL", type: "text", required: true },
    { name: "image", label: "Image URL", type: "text", required: true },
    { name: "notes", label: "Notes Content", type: "text", required: true },
    { name: "date", label: "Date & Time", type: "text", required: true },
  ];

  // Fetch the meeting records from Firestore on component mount
  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const meetingsFromFirestore = await getAllRecords("Meetings");
        const typedMeetings: Meeting[] = meetingsFromFirestore.map(
          (record: any) => ({
            title: record.title,
            description: record.description,
            link: record.link,
            image: record.image,
            date: record.date,
            notes: record.notes, // Assuming notes are stored in a separate field in Firestore
          })
        );

        setMeetings(typedMeetings);
      } catch (error) {
        console.error("Error fetching meetings: ", error);
      }
    };

    fetchMeetings();
  }, []);

  // Function to handle adding a new meeting
  const handleAddMeeting = async (meeting: Meeting) => {
    try {
      await insertRecord("Meetings", meeting); // Insert the meeting into Firestore
      setMeetings((prev) => [...prev, meeting]); // Update the local state with the new meeting
    } catch (error) {
      console.error("Error adding meeting: ", error);
    }
  };

  return (
    <div className="px-24 ">
      <div className="flex justify-between items-center py-12">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          All Meetings
        </h2>
        <div
          onClick={() => setModalOpen(true)} // Open modal on click
          className="cursor-pointer text-sm text-white bg-neutral-800/40 border border-4 border-neutral-800 p-4 rounded-xl"
        >
          Add Meeting +
        </div>
      </div>

      {/* Map through the list of meetings */}
      <div className="grid grid-cols-1">
        {meetings.map((meeting, index: number) => (
          <div key={index}>
            <HoverEffect items={[meeting]} />
          </div>
        ))}
      </div>

      {/* Modal for adding a new meeting */}
      <DynamicModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddMeeting}
        fields={meetingFields}
      />
    </div>
  );
};

export default MeetingsPage;
