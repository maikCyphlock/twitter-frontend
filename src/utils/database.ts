export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      comment: {
        Row: {
          author_id: string | null | any;
          content: string | null;
          created_at: string | null;
          id: string;
          post_ref: string | null;
        };
        Insert: {
          author_id?: string | null | any;
          content?: string | null;
          created_at?: string | null;
          id?: string;
          post_ref?: string | null;
        };
        Update: {
          author_id?: string | null | any;
          content?: string | null;
          created_at?: string | null;
          id?: string;
          post_ref?: string | null;
        };
      };
      follows: {
        Row: {
          created_at: string | null;
          id: string;
          user_id: string | null | any;
          user_to_follow: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: string;
          user_id?: string | null | any;
          user_to_follow?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          user_id?: string | null;
          user_to_follow?: string | null;
        };
      };
      likes: {
        Row: {
          author_id: string | null | any;
          created_at: string | null;
          id: string;
          tweet_like_id: string | null;
        };
        Insert: {
          author_id?: string | null | any;
          created_at?: string | null;
          id?: string;
          tweet_like_id?: string | null;
        };
        Update: {
          author_id?: string | null;
          created_at?: string | null;
          id?: string;
          tweet_like_id?: string | null;
        };
      };
      tweets: {
        Row: {
          attached_tweet: string | null;
          author_id: string | null | any;
          content: string | null;
          id: string;
          retweet: boolean | null;
        };
        Insert: {
          attached_tweet?: string | null;
          author_id?: string | null | any;
          content?: string | null;
          id?: string;
          retweet?: boolean | null;
        };
        Update: {
          attached_tweet?: string | null;
          author_id?: string | null | any;
          content?: string | null;
          id?: string;
          retweet?: boolean | null;
        };
      };
      user: {
        Row: {
          auth_id: string | null;
          bio: string | null;
          created_at: string | null;
          fullname: string | null;
          id: string;
          img_url: string | null;
          username: string | null;
        };
        Insert: {
          auth_id?: string | null;
          bio?: string | null;
          created_at?: string | null;
          fullname?: string | null;
          id: string;
          img_url?: string | null;
          username?: string | null;
        };
        Update: {
          auth_id?: string | null;
          bio?: string | null;
          created_at?: string | null;
          fullname?: string | null;
          id?: string;
          img_url?: string | null;
          username?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
