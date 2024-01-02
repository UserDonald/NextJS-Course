import { buildFeedbackPath, extractFeedback } from '.';

function handler(req, res) {
  if (req.method === 'DELETE') {
    // Delete feedback relative to the feedbackId
  }

  const feedbackId = req.query.id;
  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath);
  const selectedFeedback = feedbackData.find(
    (feedback) => feedback.id === feedbackId
  );
  res.status(200).json({ feedback: selectedFeedback });
}

export default handler;
