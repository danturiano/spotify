export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          operationName?: string;
          query?: string;
          variables?: Json;
          extensions?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      albums: {
        Row: {
          artist_id: string;
          artist_name: string | null;
          cover_url: string | undefined;
          created_at: string;
          id: string;
          release_date: string | null;
          title: string;
        };
        Insert: {
          artist_id: string;
          artist_name?: string | null;
          cover_url?: string | null;
          created_at?: string;
          id?: string;
          release_date?: string | null;
          title: string;
        };
        Update: {
          artist_id?: string;
          artist_name?: string | null;
          cover_url?: string | null;
          created_at?: string;
          id?: string;
          release_date?: string | null;
          title?: string;
        };
        Relationships: [
          {
            foreignKeyName: "albums_artist_id_fkey";
            columns: ["artist_id"];
            isOneToOne: false;
            referencedRelation: "artists";
            referencedColumns: ["id"];
          }
        ];
      };
      artists: {
        Row: {
          bio: string | null;
          created_at: string;
          id: string;
          name: string;
          photo_url: string | undefined;
        };
        Insert: {
          bio?: string | null;
          created_at?: string;
          id?: string;
          name: string;
          photo_url?: string | null;
        };
        Update: {
          bio?: string | null;
          created_at?: string;
          id?: string;
          name?: string;
          photo_url?: string | null;
        };
        Relationships: [];
      };
      likes: {
        Row: {
          album_id: string | null;
          created_at: string;
          id: string;
          song_id: string | null;
          user_id: string;
        };
        Insert: {
          album_id?: string | null;
          created_at?: string;
          id?: string;
          song_id?: string | null;
          user_id: string;
        };
        Update: {
          album_id?: string | null;
          created_at?: string;
          id?: string;
          song_id?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "likes_album_id_fkey";
            columns: ["album_id"];
            isOneToOne: false;
            referencedRelation: "albums";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "likes_song_id_fkey";
            columns: ["song_id"];
            isOneToOne: false;
            referencedRelation: "songs";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "likes_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      playlist_songs: {
        Row: {
          added_at: string;
          id: string;
          playlist_id: string;
          position: number;
          song_id: string;
        };
        Insert: {
          added_at?: string;
          id?: string;
          playlist_id: string;
          position: number;
          song_id: string;
        };
        Update: {
          added_at?: string;
          id?: string;
          playlist_id?: string;
          position?: number;
          song_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "playlist_songs_playlist_id_fkey";
            columns: ["playlist_id"];
            isOneToOne: false;
            referencedRelation: "playlists";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "playlist_songs_song_id_fkey";
            columns: ["song_id"];
            isOneToOne: false;
            referencedRelation: "songs";
            referencedColumns: ["id"];
          }
        ];
      };
      playlists: {
        Row: {
          cover_url: string | null;
          created_at: string;
          id: string;
          is_public: boolean | null;
          title: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          cover_url?: string | null;
          created_at?: string;
          id?: string;
          is_public?: boolean | null;
          title: string;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          cover_url?: string | null;
          created_at?: string;
          id?: string;
          is_public?: boolean | null;
          title?: string;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "playlists_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      recently_played: {
        Row: {
          id: string;
          played_at: string;
          song_id: string;
          user_id: string;
        };
        Insert: {
          id?: string;
          played_at?: string;
          song_id: string;
          user_id: string;
        };
        Update: {
          id?: string;
          played_at?: string;
          song_id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "recently_played_song_id_fkey";
            columns: ["song_id"];
            isOneToOne: false;
            referencedRelation: "songs";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "recently_played_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      songs: {
        Row: {
          album_id: string | null;
          artist_id: string;
          created_at: string;
          duration_ms: number;
          id: string;
          song_url: string;
          title: string;
        };
        Insert: {
          album_id?: string | null;
          artist_id: string;
          created_at?: string;
          duration_ms: number;
          id?: string;
          song_url: string;
          title: string;
        };
        Update: {
          album_id?: string | null;
          artist_id?: string;
          created_at?: string;
          duration_ms?: number;
          id?: string;
          song_url?: string;
          title?: string;
        };
        Relationships: [
          {
            foreignKeyName: "songs_album_id_fkey";
            columns: ["album_id"];
            isOneToOne: false;
            referencedRelation: "albums";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "songs_artist_id_fkey";
            columns: ["artist_id"];
            isOneToOne: false;
            referencedRelation: "artists";
            referencedColumns: ["id"];
          }
        ];
      };
      user_follows: {
        Row: {
          artist_id: string;
          created_at: string;
          id: string;
          user_id: string;
        };
        Insert: {
          artist_id: string;
          created_at?: string;
          id?: string;
          user_id: string;
        };
        Update: {
          artist_id?: string;
          created_at?: string;
          id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "user_follows_artist_id_fkey";
            columns: ["artist_id"];
            isOneToOne: false;
            referencedRelation: "artists";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "user_follows_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      users: {
        Row: {
          avatar_url: string | null;
          billing_status: string | null;
          created_at: string;
          full_name: string | null;
          id: string;
          updated_at: string;
        };
        Insert: {
          avatar_url?: string | null;
          billing_status?: string | null;
          created_at?: string;
          full_name?: string | null;
          id: string;
          updated_at?: string;
        };
        Update: {
          avatar_url?: string | null;
          billing_status?: string | null;
          created_at?: string;
          full_name?: string | null;
          id?: string;
          updated_at?: string;
        };
        Relationships: [];
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
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
  ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never;
