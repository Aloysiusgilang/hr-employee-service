import JWT from "jsonwebtoken";

const JWT_CONFIG: JWT.SignOptions = {
  expiresIn: "12h",
};

const secret = process.env.JWT_SECRET;

export default function generateToken(userId: string): string {
  return JWT.sign({ userId }, secret, JWT_CONFIG);
}

export function verifyToken(token: string) {
  try {
    const data = JWT.verify(token, secret);

    return data as { userId: string };
  } catch (err) {
    if (err instanceof JWT.TokenExpiredError) {
      throw new Error("Token expired");
    }

    throw new Error("Invalid token");
  }
}
