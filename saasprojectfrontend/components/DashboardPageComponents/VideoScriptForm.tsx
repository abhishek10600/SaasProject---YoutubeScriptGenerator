"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function VideoScriptForm() {
  const [advancedOpen, setAdvancedOpen] = useState(false);

  const [form, setForm] = useState({
    title: "",
    durationSeconds: "60",
    videoGenre: "Instagram Reel",
    targetAudience: "",
    scriptTone: "Authoritative",
    hookStyle: "Shock",
    emotionLevel: "High",
    pacingStyle: "Fast",
    depthLevel: "Deep",
    ctaType: "Subscribe",
    language: "English",
  });

  const update = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  return (
    <Card className="bg-neutral-950 border-neutral-800 text-white">
      <CardContent className="p-6 space-y-6">
        {/* HEADER */}
        <div>
          <h2 className="text-xl font-semibold">Script Generator</h2>
          <p className="text-sm text-neutral-400">
            Generate high-retention scripts with minimal effort.
          </p>
        </div>

        {/* BASICS + AUDIENCE */}
        <div className="space-y-4">
          <h3 className="text-sm uppercase tracking-wider text-neutral-400">
            Basics & Audience
          </h3>

          <Field>
            <Label>Video Topic</Label>
            <Input
              className="bg-neutral-900 border-neutral-800"
              placeholder="Why Most Men Stay Weak"
              value={form.title}
              onChange={(e) => update("title", e.target.value)}
            />
          </Field>

          <TwoCol>
            <Field>
              <Label>Platform</Label>
              <Select
                value={form.videoGenre}
                onValueChange={(v) => update("videoGenre", v)}
              >
                <SelectTrigger className="bg-neutral-900 border-neutral-800">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Instagram Reel">Instagram Reel</SelectItem>
                  <SelectItem value="YouTube Short">YouTube Short</SelectItem>
                  <SelectItem value="YouTube Video">YouTube Video</SelectItem>
                </SelectContent>
              </Select>
            </Field>

            <Field>
              <Label>Duration (sec)</Label>
              <Input
                type="number"
                className="bg-neutral-900 border-neutral-800"
                value={form.durationSeconds}
                onChange={(e) => update("durationSeconds", e.target.value)}
              />
            </Field>
          </TwoCol>

          <TwoCol>
            <Field>
              <Label>Target Audience</Label>
              <Input
                className="bg-neutral-900 border-neutral-800"
                placeholder="Young men who feel lost"
                value={form.targetAudience}
                onChange={(e) => update("targetAudience", e.target.value)}
              />
            </Field>

            <Field>
              <Label>Language</Label>
              <Select
                value={form.language}
                onValueChange={(v) => update("language", v)}
              >
                <SelectTrigger className="bg-neutral-900 border-neutral-800">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="English">English</SelectItem>
                  <SelectItem value="Hindi">Hindi</SelectItem>
                  <SelectItem value="Hinglish">Hinglish</SelectItem>
                </SelectContent>
              </Select>
            </Field>
          </TwoCol>
        </div>

        {/* ADVANCED OPTIONS */}
        <details
          className="group border border-neutral-800 rounded-lg p-4"
          open={advancedOpen}
        >
          <summary
            onClick={() => setAdvancedOpen(!advancedOpen)}
            className="cursor-pointer text-sm font-semibold text-neutral-400"
          >
            Advanced Options
          </summary>

          <div className="mt-4 space-y-4">
            <TwoCol>
              <Field>
                <Label>Tone</Label>
                <Select
                  value={form.scriptTone}
                  onValueChange={(v) => update("scriptTone", v)}
                >
                  <SelectTrigger className="bg-neutral-900 border-neutral-800">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Authoritative">Authoritative</SelectItem>
                    <SelectItem value="Aggressive">Aggressive</SelectItem>
                    <SelectItem value="Dark">Dark</SelectItem>
                  </SelectContent>
                </Select>
              </Field>

              <Field>
                <Label>Hook Style</Label>
                <Select
                  value={form.hookStyle}
                  onValueChange={(v) => update("hookStyle", v)}
                >
                  <SelectTrigger className="bg-neutral-900 border-neutral-800">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Shock">Shock</SelectItem>
                    <SelectItem value="Question">Question</SelectItem>
                    <SelectItem value="Pain">Pain-Based</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </TwoCol>

            <TwoCol>
              <Field>
                <Label>Emotion Level</Label>
                <Select
                  value={form.emotionLevel}
                  onValueChange={(v) => update("emotionLevel", v)}
                >
                  <SelectTrigger className="bg-neutral-900 border-neutral-800">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Low">Low</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="High">High</SelectItem>
                  </SelectContent>
                </Select>
              </Field>

              <Field>
                <Label>CTA</Label>
                <Select
                  value={form.ctaType}
                  onValueChange={(v) => update("ctaType", v)}
                >
                  <SelectTrigger className="bg-neutral-900 border-neutral-800">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Subscribe">Subscribe</SelectItem>
                    <SelectItem value="Comment">Comment</SelectItem>
                    <SelectItem value="None">None</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </TwoCol>
          </div>
        </details>

        {/* CTA */}
        <Button className="w-full h-11 bg-red-600 hover:bg-red-700 font-semibold">
          Generate Script
        </Button>
      </CardContent>
    </Card>
  );
}

/* ---------- HELPERS ---------- */

function TwoCol({ children }: { children: React.ReactNode }) {
  return <div className="grid md:grid-cols-2 gap-4">{children}</div>;
}

function Field({ children }: { children: React.ReactNode }) {
  return <div className="space-y-1">{children}</div>;
}
